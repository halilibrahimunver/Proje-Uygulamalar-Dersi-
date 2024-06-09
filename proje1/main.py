from flask import Flask ,render_template ,session ,request , url_for , flash
app =Flask(__name__)
app.secret_key="1234"


@app.route("/")            
def anasayfa(): 
    return render_template("index.html")
    
@app.route("/agaclar")            
def agaclar(): 
    return render_template("agaclar.html")

@app.route("/nesli")            
def nesli(): 
    return render_template("nesli.html")

@app.route("/sayi")            
def sayi(): 
    return render_template("sayi.html")

@app.route("/anket")   
def anket(): 
    return render_template("anket.html")

@app.route("/dogal")   
def dogal(): 
    return render_template("dogal.html")

@app.route("/toplama")   
def toplama(): 
    return render_template("toplama.html")






       
    

app.run(debug=True)