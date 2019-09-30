# Importing Python Modules
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from datetime import datetime

# Reading Data File
data = pd.read_csv('sachin.csv')

''' 
Below code line is used to remove NaN values but it'll not be feasible in our 
case as we can simply replace that value with a zero '0'
'''
#new_data = data.dropna(axis=0, how='any')

'''
Stumps column was having 0 value so it was not relevant to the career of 
Sachin, that's why we dropped the stumps column
'''
data = data.drop(['stumps'], axis=1)

'''
Replacing values like -, DNB, TDNB, nan with 0 as it is clearly understandable that
he didn't played in those
'''
data = data.replace(to_replace=['-', 'DNB', 'TDNB', np.nan], value='0')

'''
Creating a column for dismissals in our data
'''
def not_out(row):
    if '*' in row.batting_score:
        return 'Not Out'
    else:
        return 'Out'
    
'''
As we've created a column based on dismissals so we can remove the '*' from
the batting_scores
'''
def batting_score(row):
    if '*' in row.batting_score:
        return row.batting_score.replace('*','')
    else:
        return row.batting_score
    
'''
Getting the opposition name (Removing useless characters)
'''
def opposition(row):
    return row.opposition.split('v')[-1].lstrip()

'''
Getting the matches which were chased
'''
def chase(row):
    if 'wicket' in row.result_margin:
        return 'Chased'
    else:
        return 'Defended'

'''
Removing runs/wickets from result_margin as we got the chase column
'''  
def result_margin(row):
    return row.result_margin.split(' ')[0]

'''
Converting the date column in a datetime format so as to retrieve the date,
month and year
'''
def datetime_format(row):
    return datetime.strptime(row.date, "%d-%b-%y")

'''
Create year column
'''
def get_year(row):
    return row.date.year

'''
Create month column
'''
def get_month(row):
    return row.date.month

'''
Create date column
'''
def get_date(row):
    return row.date.day

'Applying those functions in our data'  
data['not_out'] = data.apply(not_out, axis=1)
data['batting_score'] = data.apply(batting_score, axis=1)
data['opposition'] = data.apply(opposition, axis=1)
data['chase'] = data.apply(chase, axis=1)
data['result_margin'] = data.apply(result_margin, axis=1)
data['date'] = data.apply(datetime_format, axis=1)
data['year'] = data.apply(get_year, axis=1)
data['month'] = data.apply(get_month, axis=1)
data['day'] = data.apply(get_date, axis=1)

data = data[['batting_score', 'not_out', 'wickets', 'runs_conceded', 'catches', 
             'opposition', 'ground', 'date', 'year', 'month', 'day', 
             'match_result', 'result_margin', 'chase', 'toss', 
             'batting_innings']]
'''
Extracting CSV file from cleaned data
'''
data.to_csv('sachin_data_cleaned.csv', index=False)