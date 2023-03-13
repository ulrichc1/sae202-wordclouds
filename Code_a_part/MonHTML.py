

def entete(file_name, title):
    file = open(file_name, "w", encoding='utf-8')
    msg = """
    <!DOCTYPE HTML>
    <html lang="fr">
    <head><meta charset="utf-8">
    <title>
        {}
    </title>
    </head>
    """.format(title)
    file.write(msg)
    file.close()

def body_e_1(file_name, Nombre_total_inter):
    file = open(file_name, "a", encoding='utf-8')
    msg = """
    <body>
    <h1>
        Interventions des pompiers en 2020 !
    </h1>
    <p>
    Interventions totales en france au cours de l'année 2020 :<BR>
    {}
    </p>
    <input id="searchbar" onkeyup="search_department()" type="text"
        name="search" placeholder="Rechercher une région">
    <h2>Régions:</h2>
    <ol id='list'>
    """.format(Nombre_total_inter)
    file.write(msg)
    file.close()

def tab(region):
    file = open("Interventions_2020.html", "a", encoding='utf-8')
    msg = """
    <li class="departements"><a href="Regions/{0}">{1}</a></li>
    """.format(region+".html", region)
    file.write(msg)
    file.close()

def close_body_e_1(file_name):
    file = open(file_name, "a", encoding='utf-8')
    msg = """
    </ol>
    <style>
    #searchbar{
     align-items:center;
     padding:15px;
     border-radius: 10px;
    }
    html{ display: inline-block; margin: 0px auto; text-align: center;}
    input[type=text] {
      width: 30%;
      -webkit-transition: width 0.15s ease-in-out;
      transition: width 0.15s ease-in-out;
    }
    #list{font-size:  1.5em;
        margin-left:-37px;}
    ol {list-style: none;}
    .departements{display: list-item;} 
    a{text-decoration:none;}
    a:link {color: #000;}
    a:visited {color: #000;}
    </style>
    
    <script>
    function search_department() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('departements');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
            }
        }
    }
    </script>
    </body>
    </html>
    """
    file.write(msg)
    file.close()

def body_regions(file_name, region, B_1, B_2, B_3, B_4):
    file = open(file_name, "a", encoding='utf-8')
    msg = """
    <body>
    <a href="../Interventions_2020.html">Retour aux régions</a>
    <h1>{0}</h1>
    <div id="container">
    <button id="button1" class="button" onclick="{1}">Le secours d'urgence aux personnes</button>
    <button id="button2" class="button" onclick="{2}">Incendies</button>
    <button id="button3" class="button" onclick="{3}">Accidents</button>
    <button id="button4" class="button" onclick="{4}">Autres</button>
    </div>
  
    <div class="all">
    """.format(region, B_1, B_2, B_3, B_4)
    file.write(msg)
    file.close()

def regions_stats_e_2(file_name, nom, name, stat1, stat2, stat3, stat4,s1,s2,s3,s4):
    file = open(file_name, "a", encoding='utf-8')
    msg = """
    
    <div class="box">
        <h1 class="title">%s</h1>
        <div class="value">
            <p><center>Nombre d'interventions:</center></p>
            <p><b><center id ='"""%nom+name+"""'>{0}</center></b></p>
        </div>
    </div>
    """.format(stat1)
    file.write(msg)
    msg = """
    <script>
    function up"""+s1+"""() {document.getElementById('"""+name+"""').innerHTML = '%d';}
    </script>
    """ %stat1
    file.write(msg)
    msg = """
    <script>
    function up"""+s2+"""() {document.getElementById('"""+name+"""').innerHTML = '%d';}
    </script>
    """ %stat2
    file.write(msg)
    msg = """
    <script>
    function up"""+s3+"""() {document.getElementById('"""+name+"""').innerHTML = '%d';}
    </script>
    """ %stat3
    file.write(msg)
    msg = """
    <script>
    function up"""+s4+"""() {document.getElementById('"""+name+"""').innerHTML = '%d';}
    </script>
    """ %stat4
    file.write(msg)
    file.close()


def close_body_regions(file_name):
    file = open(file_name, "a", encoding='utf-8')
    msg = """
        </div>
        </body>
        <script>
        window.addEventListener("load", function() {
        document.getElementById("button1").classList.add("pressed");
        });
        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");
        const button3 = document.getElementById("button3");
        const button4 = document.getElementById("button4");
            
            button1.addEventListener("click", function() {
              button1.classList.add("pressed");
              button2.classList.remove("pressed");
              button3.classList.remove("pressed");
              button4.classList.remove("pressed");
            });
            
            button2.addEventListener("click", function() {
              button1.classList.remove("pressed");
              button2.classList.add("pressed");
              button3.classList.remove("pressed");
              button4.classList.remove("pressed");
            });
            
            button3.addEventListener("click", function() {
              button1.classList.remove("pressed");
              button2.classList.remove("pressed");
              button3.classList.add("pressed");
              button4.classList.remove("pressed");
            });
            
            button4.addEventListener("click", function() {
              button1.classList.remove("pressed");
              button2.classList.remove("pressed");
              button3.classList.remove("pressed");
              button4.classList.add("pressed");
            });
        </script>
        <style>
            .button {
              background-color: white;
              border: 1px solid black;
              border-radius: 5px;
              padding: 5px 10px;
            }
            
            .button.pressed {
              background-color: lightgray;
            }
          .box {
            border: 2px solid black;
            width:20%;
            margin-bottom:20px;
          }
          .title {
            font-size: 20px;
          }
          .value {
            border: 1px solid black;
            font-size: 16px;
            margin:2px;
          }
          .all {
          display:flex;
          justify-content:space-around;
          flex-wrap:wrap;
          padding-bottom:20px;
          }
        #container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
          padding-bottom:35px;
        }
        button {
          flex: 1;
          height:50px;
        }
        
          h1 {text-align: center;}  
          .box {
            border: 2px solid black;
            width:20%;
          }
          .title {
            font-size: 20px;
          }
          .value {
            border: 1px solid black;
            font-size: 16px;
            margin:2px;
          }
          .all {
          display:flex;
          justify-content:space-around;
          flex-wrap:wrap;
          }
        </style>
        
        </html>
        """
    file.write(msg)
    file.close()




