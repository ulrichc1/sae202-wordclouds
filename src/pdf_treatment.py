import os
from PyPDF2 import PdfReader
import occurences
import cleaning
import wordclouds


def read_pdf(file_name: str) -> str:
    """
       Lit un fichier pdf et retourne le texte contenu dans le fichier.

           :param file_name: Nom du fichier pdf à lire.
           :type file_name: str
           :returns: Texte contenu dans le fichier pdf, sans les mentions "texte intégral" et "télécharger le .pdf.
           :rtype: str
       """
    with open(f"../pdfs/{file_name}", "rb") as f:
        pdf = PdfReader(f)
        # On récupère le texte de toutes les pages du pdf
        text = " ".join([page.extract_text() for page in pdf.pages]).lower()
    text = text.split("texte intégral")[-1].split("télécharger le .pdf")[
        -1]  # On supprime les mentions "texte intégral" et "télécharger le .pdf"
    return text


def find_pdf(datedebut: int = None, datefin: int = None) -> list:
    """
    Retourne la liste des fichiers pdf trouvés dans le dossier /pdfs,
    ou seulement ceux compris entre datedebut et datefin s'ils sont spécifiés.

        :param datedebut: Année de début de la période à analyser.
        :type datedebut: int
        :param datefin: Année de fin de la période à analyser.
        :type datefin: int
        :return: Liste des fichiers pdf trouvés dans le dossier /pdfs.
        :rtype: list
    """
    if datedebut is None and datefin is None:  # Si les deux paramètres sont None, on retourne tous les fichiers pdf
        return [f for f in os.listdir(f"../pdfs/") if f.endswith(".pdf")]  # On retourne la liste des fichiers pdf
    else:
        return [f for f in os.listdir(f"../pdfs/")
                # On retourne la liste des fichiers pdf compris entre datedebut et datefin
                for i in range(datedebut, datefin + 1) if
                f.endswith(str(i) + ".pdf")]  # On retourne la liste des fichiers pdf


def final_process(dico: dict, textes: str, nom: str) -> None:
    """
    Traite la dernière étape du traitement des fichiers pdf (nuage de mots et csv).
        :param textes: textes à analyser (regroupés).
        :type textes: str
        :param nom: Nom du nuage de mot et du csv.
        :type nom: str
        :param dico: Dictionnaire d'occurence des mots.
        :type dico: dict
        :return: None
    """
    parent_dir = os.path.abspath(os.path.join(os.getcwd(), os.pardir))  # on récupère le chemin du dossier parent
    csv_dir = os.path.join(parent_dir, 'csv')
    if not os.path.exists(csv_dir):  # On crée un dossier csv s'il n'existe pas
        os.makedirs(csv_dir)
    csv_path = os.path.join(csv_dir, nom + '.csv')
    occurences.creation_csv(dico, csv_path)
    print(f"Téléchargement réussi pour {nom}")
    wordclouds.create_wordcloud(dico, nom)
    print(f"Nuage de mot réussi pour {nom}")
    print(f"Traitement réussi pour {nom}")


def traitement_pdf(fichiers: list, nom: str) -> None:
    """
    Fait le nuage de mot et un csv des occurences de chaque mot des textes dans la liste.
        :param fichiers: Liste des fichiers pdf à analyser.
        :type fichiers: list
        :param nom: Nom du nuage de mot et du csv.
        :type nom: str
        :return: None
    """
    textes = ""  # on crée une variable qui contiendra tout les textes
    for fichier in fichiers:
        textes += read_pdf(fichier)  # on ajoute le texte du fichier à la variable textes
    try:
        textes = cleaning.preprocess(textes)  # on supprime les mots inutiles
        dictionnaire_occurence_texte = occurences.dict_occurences(
            textes)  # on crée un dictionnaire d'occurence des mots
        final_process(dictionnaire_occurence_texte, textes, nom)
    except Exception as e:
        print('Erreur: ', e)


def traitement_pdf_lem(fichiers: list, nom: str) -> None:
    """
    Fait le nuage de mot et un csv des occurences de chaque mot des textes dans la liste (lemmatization).
        :param fichiers: Liste des fichiers pdf à analyser.
        :type fichiers: list
        :param nom: Nom du nuage de mot et du csv.
        :type nom: str
        :return: None
    """
    textes = ""  # on crée une variable qui contiendra tout les textes
    nom = nom + "_lemmatized"
    for fichier in fichiers:
        textes += read_pdf(fichier)  # on ajoute le texte du fichier à la variable textes
    try:
        textes = cleaning.preprocess(textes)  # on supprime les mots inutiles
        textes = cleaning.lemmatize(textes)  # on lemmatize les mots
        dictionnaire_occurence_texte = occurences.dict_occurences(
            textes)  # on crée un dictionnaire d'occurence des mots
        final_process(dictionnaire_occurence_texte, textes, nom)
    except Exception as e:
        print('Erreur: ', e)


def traitement_pdf_stem(fichiers: list, nom: str) -> None:
    """
    Fait le nuage de mot et un csv des occurences de chaque mot des textes dans la liste (stemming).
        :param fichiers: Liste des fichiers pdf à analyser.
        :type fichiers: list
        :param nom: Nom du nuage de mot et du csv.
        :type nom: str
        :return: None
    """
    textes = ""  # on crée une variable qui contiendra tout les textes
    nom = nom + "_stemmed"
    for fichier in fichiers:
        textes += read_pdf(fichier)  # on ajoute le texte du fichier à la variable textes
    try:
        textes = cleaning.preprocess(textes)  # on supprime les mots inutiles
        textes = cleaning.stemming(textes)  # on lemmatize les mots
        dictionnaire_occurence_texte = occurences.dict_occurences(
            textes)  # on crée un dictionnaire d'occurence des mots
        final_process(dictionnaire_occurence_texte, textes, nom)
    except Exception as e:
        print('Erreur: ', e)


def traitement_pdf_multiple(fichiers: list, nom: str) -> None:
    """
    Fait le nuage de mot et un csv des occurences de chaque mot des textes dans la liste (plusieurs textes).
        :param fichiers: Liste des fichiers pdf à analyser.
        :type fichiers: list
        :param nom: Nom du nuage de mot et du csv.
        :type nom: str
        :return:
    """
    textes = ""  # on crée une variable qui contiendra tout les textes
    for fichier in fichiers:
        textes += read_pdf(fichier)  # on ajoute le texte du fichier à la variable textes
    try:
        textes = cleaning.preprocess(textes)  # on supprime les mots inutiles
        textes_lem = cleaning.lemmatize(cleaning.preprocess(textes))  # on supprime les mots inutiles
        textes_stem = cleaning.stemming(cleaning.preprocess(textes))  # on supprime les mots inutiles
        dictionnaire_occurence_texte = occurences.dict_occurences(
            textes)  # on crée un dictionnaire d'occurence des mots
        dictionnaire_occurence_texte_lem = occurences.dict_occurences(
            textes_lem)  # on crée un dictionnaire d'occurence des mots
        dictionnaire_occurence_texte_stem = occurences.dict_occurences(
            textes_stem)  # on crée un dictionnaire d'occurence des mots
        final_process(dictionnaire_occurence_texte, textes, nom)
        final_process(dictionnaire_occurence_texte_lem, textes_lem, nom + "_lemmatized")
        final_process(dictionnaire_occurence_texte_stem, textes_stem, nom + "_stemmed")
    except Exception as e:
        print('Erreur: ', e)


def select_mandats() -> tuple:
    """
    Demande à l'utilisateur de rentrer une date de début et une date de fin,
    et retourne la liste des fichiers pdf compris entre ces deux dates, ainsi que le nom du fichier.
        :return: Liste des fichiers pdf compris entre datedebut et datefin, et le nom du fichier.
        :rtype: tuple
    """
    print("1974-1980 Giscard d'Estaing\n1981-1987 1er mandat de Mitterrand\n1988-1994 2e mandat de Mitterrand")
    print(
        "1995-2001 1er mandat de Jacques Chirac\n2002-2006 2e mandat de Jacques Chirac\n2007-2011 Sarkozy\n2012-2016 "
        "Hollande")
    print("2017-2021 Macron\n2022 2e mandat de Macron")
    try:
        debut = int(input("Date de début: "))
        fin = int(input("Date de fin: "))
        if debut <= fin and debut <= 2022 and fin >= 1974:  # si les dates sont valides
            return find_pdf(debut,
                            fin), f"{debut}-{fin}"  # on renvoie la liste des fichiers pdf et le nom du fichier
        return None
    except Exception as e:
        print(e)
        return None


def treat_all() -> tuple:
    """
    Traite tous les mandats.
        :return: Liste de tous les fichiers pdf, et le nom du fichier.
        :rtype: tuple
    """
    return find_pdf(1974, 2022), f"1974-2022"
