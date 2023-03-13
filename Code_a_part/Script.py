import csv, os
from MonHTML import *

def remove(string):
    return "".join(string.split())

def OnMyWay():

    #Trouve les régions et calcul le total interventions
    Liste_regions = []
    Nombre_total_inter = 0
    folder = open("interventions2020.csv", "r")
    csvreader = csv.DictReader(folder, delimiter=";")
    for row in csvreader:
        if row["Région"] not in Liste_regions:
            Liste_regions.append(row["Région"])
        nb = int(remove(row["Total interventions"]))
        Nombre_total_inter += int(nb)
    Liste_regions.sort()
    folder.close()


    #Va séparer les différentes données en 4 familles (pour les régions)
    #Définition des colones familles
    Le_secours_d_urgence_aux_personnes = ["Secours en montagne","Malaises sur lieux de travail","Malaises à domicile : urgence vitale","Malaises à domicile : carence","Malaises en sport","Malaises sur voie publique","Autolyses","Secours en piscines ou eaux intérieures","Secours en mer (FDSM)","Intoxications","dont intoxications au CO","Autres SAV","Secours à victime","Relevage de personnes","Recherche de personnes","Aides à personne","Secours à personne"]
    Incendies = ["Feux d'habitations-bureaux", "dont feux de cheminées", "Feux d'ERP avec local à sommeil","Feux d'ERP sans local à sommeil","Feux de locaux industriels","Feux de locaux artisanaux", "Feux de locaux agricoles", "Feux sur voie publique", "Feux de véhicules", "Feux de végétations", "Autres feux", "Incendies"]
    Accidents = ["Accidents sur lieux de travail","Accidents à domicile","Accidents de sport","Accidents sur voie publique","Accidents routiers","Accidents ferroviaires", "Accidents aériens","Accidents de navigation","Accidents de téléportage","Accidents de circulation"]
    Autres = ["Odeurs - fuites de gaz","Odeurs (autres que gaz)","Fait dus à l'électricité","Pollutions - contaminations","Autres risques technologiques","Risques technologiques","Fuites d'eau","Inondations","Ouvertures de portes","Recherches d'objets","Bruits suspects","Protection des biens","Fausses alertes","dont fausses alertes DAAF","Faits d'animaux (hors hyménoptères)","Hyménoptères","Dégagements de voies publiques","Nettoyages de voies publiques","Éboulements","Déposes d'objets","Piquets de sécurité - surveillances","Engins explosifs","Autres opérations diverses","Divers","Opérations diverses"]

    folder = open("interventions2020.csv", "r")
    csvreader = csv.DictReader(folder, delimiter=";")

    #Création de tous les fichiers
    if not os.path.exists("Data"):
        os.makedirs("Data")
    for row in csvreader:
        if not os.path.exists("Data/"+row["Région"]):
            os.makedirs("Data/"+row["Région"])
        if not os.path.exists("Data/"+row["Région"]+"/"+row["Département"]+".csv"):
            c_file = open("Data/"+row["Région"]+"/"+row["Département"]+".csv", "w", encoding='utf-8')
            c_file.close()

        #Ajout du contenu de chaque fichier
        contenu = []
        for i in row:
            contenu.append(row[i])
        header = ["Type", "Intervention", "Nombre"]
        fifi =open("Data/" + row["Région"] + "/" + row["Département"] + ".csv", "w", newline='', encoding='utf-8')
        fifi.write('')
        fifi.close()
        with open("Data/" + row["Région"] + "/" + row["Département"] + ".csv", "a", newline='', encoding='utf-8') as csv_file:
            writer = csv.DictWriter(csv_file, fieldnames=header, delimiter=',')
            writer.writeheader()
            for secours in Le_secours_d_urgence_aux_personnes:
                writer.writerow({"Type":"secours", "Intervention":secours, "Nombre":row[secours]})
            for secours in Incendies:
                writer.writerow({"Type":"incendie", "Intervention":secours, "Nombre":row[secours]})
            for secours in Accidents:
                writer.writerow({"Type":"accident", "Intervention":secours, "Nombre":row[secours]})
            for secours in Autres:
                writer.writerow({"Type":"autres", "Intervention":secours, "Nombre":row[secours]})
        csv_file.close()
    folder.close()


    #Génération de la page Interventions_2020.html
    entete("Interventions_2020.html", "Interventions 2020")
    body_e_1("Interventions_2020.html", Nombre_total_inter)
    for region in Liste_regions:
        tab(region)
    close_body_e_1("Interventions_2020.html")



    #Génération des pages des régions
    if not os.path.exists("Regions"):
        os.makedirs("Regions")
    for region in Liste_regions:
        L_dep = []
        folder = open("interventions2020.csv", "r")
        csvreader = csv.DictReader(folder, delimiter=";")
        for row in csvreader:
            if row["Région"] == region:
                L_dep.append(row["Département"])
        folder.close()
        entete("Regions/"+region+".html", region)
        B_1 = "";B_2 = "";B_3 = "";B_4 = ""
        for i in range(len(L_dep)):
            B_1 += "up" + str(i+1) + "1();"
            B_2 += "up" + str(i+1) + "2();"
            B_3 += "up" + str(i+1) + "3();"
            B_4 += "up" + str(i+1) + "4();"
        body_regions("Regions/"+region+".html", region, B_1, B_2, B_3, B_4)

        #Permet d'assigner les valeurs des départements & les updates
        name = 0
        for i in L_dep:
            nb_secours = 0;nb_incendies = 0;nb_accidents = 0;nb_autres = 0
            folder = open("Data/" + region + "/"+i+".csv")
            csvreader = csv.DictReader(folder)
            for row in csvreader:
                if row["Type"] == "secours":
                    nb_secours += int(remove(row["Nombre"]))
                elif row["Type"] == "incendie":
                    nb_incendies += int(remove(row["Nombre"]))
                elif row["Type"] == "accident":
                    nb_accidents += int(remove(row["Nombre"]))
                elif row["Type"] == "autres":
                    nb_autres += int(remove(row["Nombre"]))
                else :
                    print('1 fichier non identifié')
            folder.close()
            name += 1
            s1 = str(name) + "1";s2 = str(name) + "2";s3 = str(name) + "3";s4 = str(name) + "4"
            regions_stats_e_2("Regions/"+region+".html", i,str(name), nb_secours, nb_incendies, nb_accidents, nb_autres, s1,s2,s3,s4)
        close_body_regions("Regions/"+region+".html")





OnMyWay()




