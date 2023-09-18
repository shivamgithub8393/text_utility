from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pandas as pd
from openpyxl import load_workbook
from datetime import datetime

# creating a Flask app
app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

@cross_origin()
@app.route('/test', methods = ['GET', 'POST'])
def home():
    if(request.method == 'GET'):
        try:
            input_1 = request.args.get('input_1')
            input_2 = request.args.get('input_2')
            print("input_1: " + input_1, "input_2: " + input_2)
            
            # append data into excel file
            # Specify the Workbook
            wb_append = load_workbook("output.xlsx")
            
            sheet = wb_append.active
            row = (input_1, input_2, datetime.today())
            sheet.append(row)
            
            #Saving the data in our sample workbook/sheet
            wb_append.save('output.xlsx')
    
            return jsonify({'status': "success", 'data': "hello world"})
        except PermissionError:
            return jsonify({'status': "error", 'data': "Output file is open. First close it and try again"})
        except:
            return jsonify({'status': "error", 'data': "something went wrong"})
  
# driver function
if __name__ == '__main__':
    app.run(debug = True)