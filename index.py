import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="nogamenolife04",
  database="mypwd"
)

mycursor = mydb.cursor()

# mycursor.execute("CREATE TABLE passwords (id INT AUTO_INCREMENT PRIMARY KEY, websitename VARCHAR(255), websiteurl VARCHAR(255) , username VARCHAR(255) , password VARCHAR(255))") 
sql = "INSERT INTO passwords (websitename, websiteurl,username,password) VALUES (%s, %s,%s,%s)"
val = ("John", "Highway 21","test","test")
mycursor.execute(sql, val)

mydb.commit()
print(mycursor.rowcount, "record inserted.")