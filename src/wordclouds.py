import numpy as np
import wordcloud
from matplotlib import pyplot as plt
from wordcloud import ImageColorGenerator
from PIL import Image


def create_wordcloud(dico: dict, filename: str) -> None:
    """
    Crée un nuage de mot à partir d'un dictionnaire d'occurences.
        :param dico: Dictionnaire d'occurences.
        :type dico: dict
        :param filename: Nom du fichier à créer.
        :type filename: str
        :return: None
    """
    # Masque du nuage de mot (ici le drapeau français)
    mask = np.array(Image.open("../wordclouds/france.png").convert('RGB'))  # on charge le masque
    wc = wordcloud.WordCloud(width=1600, height=900, background_color="white", mode="RGBA", max_words=100, mask=mask,
                             normalize_plurals=False).generate_from_frequencies(dico)  # on crée le nuage de mot
    # wc.to_file(f"../wordclouds/{filename}.png")
    # coloration du nuage de mot
    image_colors = ImageColorGenerator(mask)
    plt.figure(figsize=(16, 9))
    plt.imshow(wc.recolor(color_func=image_colors), interpolation="bilinear")
    plt.axis("off")
    # store to file
    plt.savefig(f"../wordclouds/{filename}.png", format="png", bbox_inches='tight')  # on l'enregistre dans le dossier wordclouds
    plt.close() # on ferme la figure
