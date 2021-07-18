from __future__ import absolute_import, division, print_function, unicode_literals
import os
import sys
import json
from csv import writer
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from six.moves import urllib
import tensorflow.compat.v2.feature_column as fc
import tensorflow as tf

lines = sys.stdin.readlines()
lines = json.loads(lines[0])
np_lines = np.array(lines)

with open('eval.csv', 'a') as f_object:
  writer_object = writer(f_object)
  writer_object.writerow(np_lines)
  f_object.close()

dftrain = pd.read_csv('C:/Users/Aditya/Desktop/Projects/titanic-predictor/backend/train.csv')
dfeval = pd.read_csv('C:/Users/Aditya/Desktop/Projects/titanic-predictor/backend/eval.csv')

y_train = dftrain.pop('survived')
y_eval = dfeval.pop('survived')

CATEGORICAL_COLUMNS = ['sex', 'n_siblings_spouses', 'parch', 'class', 'deck', 'embark_town', 'alone']
NUMERIC_COLUMNS = ['age', 'fare']

feature_columns = []

for feature_name in CATEGORICAL_COLUMNS:
    vocabulary = dftrain[feature_name].unique()
    feature_columns.append(tf.feature_column.categorical_column_with_vocabulary_list(feature_name, vocabulary))

for feature_name in NUMERIC_COLUMNS:
    feature_columns.append(tf.feature_column.numeric_column(feature_name, dtype=tf.float32))

def make_input_fn(data_df, label_df, num_epochs=10, shuffle=True, batch_size=32):
  def input_function():
    ds = tf.data.Dataset.from_tensor_slices((dict(data_df), label_df))
    if shuffle:
      ds = ds.shuffle(1000)
    ds = ds.batch(batch_size).repeat(num_epochs)
    return ds
  return input_function

train_input_fn = make_input_fn(dftrain, y_train)
eval_input_fn = make_input_fn(dfeval, y_eval, num_epochs=1, shuffle=False)


linear_est = tf.estimator.LinearClassifier(feature_columns=feature_columns)
linear_est.train(train_input_fn)

outcome = list(linear_est.predict(eval_input_fn))
n = len(dfeval)-1
print(outcome[n]['probabilities'][1])  