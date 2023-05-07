import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import matplotlib.pyplot as plt
import os


def tfidf_analysis(csv_file1: str, csv_file2: str) -> None:
    """
    Analyse en utilisant la méthode TfidfVectorizer et la comparaison par score de cosinus
        :param csv_file1: Nom du fichier csv contenant les données du texte 1
        :type csv_file1: str
        :param csv_file2: Nom du fichier csv contenant les données du texte 2
        :type csv_file2: str
        :return: None
    """

    # Se diriger dans le dossier contenant les fichiers csv (../csv)
    os.chdir(os.path.join(os.path.dirname(__file__), "..", "csv"))

    try:
        # Charger les données
        df_text1 = pd.read_csv(f"{csv_file1}.csv", index_col=0)
        df_text2 = pd.read_csv(f"{csv_file2}.csv", index_col=0)
    except FileNotFoundError:
        print("Le fichier CSV spécifié n'a pas été trouvé.")
        return

    # Chargement des données
    df_text1 = pd.read_csv(f"{csv_file1}.csv", index_col=0)
    df_text2 = pd.read_csv(f"{csv_file2}.csv", index_col=0)

    # On garde que les 150 premiers mots les plus fréquents
    df_text1 = df_text1.head(150)
    df_text2 = df_text2.head(150)

    # Vectorisation des textes avec TfidfVectorizer
    vectorizer = TfidfVectorizer()
    X1 = vectorizer.fit_transform(df_text1.index)
    X2 = vectorizer.transform(df_text2.index)

    # Comparaison par score de cosinus
    sim = cosine_similarity(X1, X2)
    print(sim)
    # Représentation graphique
    plt.figure(figsize=(10, 10))
    fig, ax = plt.subplots()
    im = ax.imshow(sim, cmap='coolwarm')
    ax.set_xticklabels("")
    ax.set_yticklabels("")
    ax.set_xlabel(f"Mots les plus fréquents dans le mandat de {csv_file2}")
    ax.set_ylabel(f"Mots les plus fréquents dans le mandat de {csv_file1}")
    plt.colorbar(im)
    plt.title(f"Similarité entre {csv_file1} et {csv_file2}")

    # Sauvegarde le graphique dans le dossier ../analysis
    os.chdir(os.path.join(os.path.dirname(__file__), "..", "analysis"))
    plt.savefig(f"tfidf_{csv_file1}_{csv_file2}.png")

    plt.show()


# mandats successifs
# tfidf_analysis("1974-1980", "1981-1987")
# tfidf_analysis("1981-1987", "1988-1994")
# tfidf_analysis("1995-2001", "2002-2006")
# tfidf_analysis("2002-2006", "2007-2011")
# tfidf_analysis("2007-2011", "2012-2016")
# tfidf_analysis("2012-2016", "2017-2021")
tfidf_analysis("2017-2021", "2022-2022")

# mandats non successifs
# tfidf_analysis("1974-1980", "2022-2022")
# tfidf_analysis("1981-1987", "2022-2022")
# tfidf_analysis("1995-2001", "2022-2022")
# tfidf_analysis("2002-2006", "2022-2022")
# tfidf_analysis("2007-2011", "2022-2022")
# tfidf_analysis("2012-2016", "2022-2022")
# tfidf_analysis("1974-1980", "2017-2021")
# tfidf_analysis("1981-1987", "2017-2021")
# tfidf_analysis("1995-2001", "2017-2021")
# tfidf_analysis("2002-2006", "2017-2021")
# tfidf_analysis("2007-2011", "2017-2021")
# tfidf_analysis("2012-2016", "2017-2021")
# tfidf_analysis("1974-1980", "2012-2016")
# tfidf_analysis("1981-1987", "2012-2016")
# tfidf_analysis("1995-2001", "2012-2016")
# tfidf_analysis("2002-2006", "2012-2016")
# tfidf_analysis("2007-2011", "2012-2016")
# tfidf_analysis("1974-1980", "2007-2011")
# tfidf_analysis("1981-1987", "2007-2011")
# tfidf_analysis("1995-2001", "2007-2011")
# tfidf_analysis("2002-2006", "2007-2011")
# tfidf_analysis("1974-1980", "2002-2006")
# tfidf_analysis("1981-1987", "2002-2006")
# tfidf_analysis("1995-2001", "2002-2006")
# tfidf_analysis("1974-1980", "1995-2001")
# tfidf_analysis("1981-1987", "1995-2001")
# tfidf_analysis("1974-1980", "1981-1987")
