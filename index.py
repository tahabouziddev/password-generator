


import mysql.connector
import flask
from flask import Flask
from flask import request
from flask import jsonify
app = Flask(__name__)



mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="nogamenolife04",
  database="mypwd"
)

mycursor = mydb.cursor()

# mycursor.execute("CREATE TABLE passwords (id INT AUTO_INCREMENT PRIMARY KEY, websitename VARCHAR(255), websiteurl VARCHAR(255) , username VARCHAR(255) , password VARCHAR(255))") 
# print request.POST['']  for POST form method
@app.route('/store',methods=['POST','GET'])
def pass_val():
      pwd= request.args.get('pwd')
      weburl= request.args.get('weburl')
      webname= request.args.get('webname')
      username= request.args.get('username')
      sql = "INSERT INTO passwords (websitename, websiteurl,username,password) VALUES (%s, %s,%s,%s)"
      val = (webname, weburl,username,pwd)
      mycursor.execute(sql, val)
      mydb.commit()
      return jsonify({'reply':'success'})
@app.route('/extract',methods=['POST','GET'])
def extract_val():
   weburl= request.args.get('weburl')
   
   sql = "SELECT * FROM passwords WHERE websiteurl = %s "
   this = (weburl,)
   mycursor.execute(sql,this)

   myresult = mycursor.fetchall()
   row = [item[4] for item in myresult]
   return jsonify({'result': row})

@app.route('/extracto',methods=['POST','GET'])
def extract_valo():
   webname= request.args.get('webname')
   
   sql = "SELECT * FROM passwords WHERE websitename = %s "
   this = (webname,)
   mycursor.execute(sql,this)

   myresult = mycursor.fetchall()
   row = [item[4] for item in myresult]
   return jsonify({'result': row})



if __name__=='__main__':
  app.run(debug=True) 
