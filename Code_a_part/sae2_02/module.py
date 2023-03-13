import sys
import PyPDF2
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image

def lire_pdf(fileName):
    pdfFileObj = open(fileName, 'rb')
    pdfReader = PyPDF2.PdfReader(pdfFileObj)
    for pageNum in range(len(pdfReader.pages)):
        pageObj = pdfReader.pages[pageNum]
        return enlever_caractère(pageObj.extract_text())

def enlever_caractère(text):
    caractère_exlus='&é"(-_çà)=^$ù*,;:!1234567890°+£¨%µ§/.?~#{[|`\^@]}¤'
    text = text.replace("'", "")
    for caractère in caractère_exlus:
        text= text.replace(caractère,"")
    return text

def création_nuage(text):
    exclure_mots = ['d', 'du', 'de', 'la', 'des', 'le', 'et', 'est', 'elle', 'une', 'en', 'que', 'aux', 'qui', 'ces',
                    'les', 'dans', 'sur', 'l', 'un', 'pour', 'par', 'il', 'ou', 'à', 'ce', 'a', 'sont', 'cas', 'plus',
                    'leur', 'se', 's', 'vous', 'au', 'c', 'aussi', 'toutes', 'autre', 'comme']
    wordcloud = WordCloud(background_color='white', stopwords=exclure_mots, max_words=50).generate(text)
    return wordcloud


if __name__ == "__main__":
    création_nuage(lire_pdf('1974.pdf'))
    print("n")