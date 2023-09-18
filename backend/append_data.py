import pandas as pd
from openpyxl import load_workbook
 
#Specify the Workbook
 
wb_append = load_workbook("output.xlsx")
 
sheet = wb_append.active
rows = (
   ("p-0011","Brown Rice"),
)
 
#Storing date in tuple of tuples
for row in rows:
   sheet.append(row)
 
#Saving the data in our sample workbook/sheet
 
wb_append.save('output.xlsx')