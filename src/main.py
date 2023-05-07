import cleaning
import pdf_treatment

false = True
if __name__ == "__main__":
    while false:
        try:
            choix = int(input("1: Traitement par mandat (date à sélectionner)\n2: Traitement pour tous les fichiers .pdf "
                              "(un par un)\n3: Traitement pour tous les fichiers .pdf (un par un) avec NLP ("
                              "lemmatization)\n4: Traitement pour tous les fichiers .pdf (un par un) avec NLP ("
                              "stemming)\n5: Traitement pour tous les fichiers .pdf (un par un) avec toutes les options "
                              "de NLP \n6: Traitement pour tous les mandats avec NLP \n7: Quitter le programme \n\nChoix:"))
            if choix == 1:
                fichiers, nom = pdf_treatment.select_mandats()
                if fichiers:
                    # On vérifie si l'utilisateur a saisi un ou plusieurs mandats
                    if len(fichiers) > 1:
                        pdf_treatment.traitement_pdf_multiple(fichiers, nom)
                    else:
                        pdf_treatment.traitement_pdf(fichiers, nom)
                        pdf_treatment.traitement_pdf_lem(fichiers, nom)
                        pdf_treatment.traitement_pdf_stem(fichiers, nom)
                else:
                    print("Aucun fichier .pdf trouvé")
            elif choix == 2:
                fichiers = pdf_treatment.find_pdf()
                if fichiers:
                    for fichier in fichiers:
                        nom = fichier[:-4]
                        pdf_treatment.traitement_pdf([fichier], nom)
                else:
                    print("Aucun fichier .pdf trouvé")
            elif choix == 3:
                fichiers = pdf_treatment.find_pdf()
                if fichiers:
                    for fichier in fichiers:
                        nom = fichier[:-4]
                        pdf_treatment.traitement_pdf_lem([fichier], nom)
                else:
                    print("Aucun fichier .pdf trouvé")
            elif choix == 4:
                fichiers = pdf_treatment.find_pdf()
                if fichiers:
                    for fichier in fichiers:
                        nom = fichier[:-4]
                        pdf_treatment.traitement_pdf_stem([fichier], nom)
                else:
                    print("Aucun fichier .pdf trouvé")
            elif choix == 5:
                fichiers = pdf_treatment.find_pdf()
                if fichiers:
                    for fichier in fichiers:
                        nom = fichier[:-4]
                        pdf_treatment.traitement_pdf([fichier], nom)
                        pdf_treatment.traitement_pdf_lem([fichier], nom)
                        pdf_treatment.traitement_pdf_stem([fichier], nom)
                else:
                    print("Aucun fichier .pdf trouvé")
            elif choix == 6:  # traitement pour tous les mandats
                fichiers, nom = pdf_treatment.treat_all()
                if fichiers:
                    pdf_treatment.traitement_pdf_multiple(fichiers, nom)
            elif choix == 7: # On quitte le programme
                print("Fermeture du programme...")
                false = False
            else:
                print("Choix invalide")
        except Exception as e:
            print('Erreur: ' + str(e))
