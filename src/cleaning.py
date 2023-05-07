from re import sub
import spacy
import re  # module pour les expressions régulières

nlp = spacy.load(
    "fr_core_news_md")  # Chargement du modèle français de spacy pour le traitement du texte (lemmatisation)

nlp2 = spacy.load(
    "fr_core_news_sm")  # Chargement du modèle français de spacy pour le traitement du texte (stemming)


def preprocess(text: str) -> str:
    """
    Supprime les words inutiles (stop words) et les caractères spéciaux.
        :param text: Texte à nettoyer
        :type text: str
        :returns: Texte nettoyé et lemmatisé
        :rtype: str
    """
    banned_words = ["l'", "d'", "s'", "n'", "j'", "qu'", "c'", "qu'", 'ne', "m'", "gouv",
                    "tant", "tout", "toute", "toutes", "trop", "ci", "pres", "deja", "vais", "aurai", "soit",
                    "ptt", "etait", "su", "va", "fr", "les", "est", "elle", "uvre", "mais", "aille",
                    "veux", "chers", "chac", "les", "qui", "pour", "c'est", "aussi", "plus", "tout", "mais", "ou",
                    "cest", "for",
                    "est", "donc", "or", "ni", "car", "à", "dans", "par", "pour", "en", "vers", "avec", "de", "sans",
                    "sous", "sur", "alors", "depuis", "deux", "dont", "fois", "parce que", "parce", "sais",
                    "-elle", "-il", "10ème", "1er", "1ère", "2ème", "3ème", "4ème", "5ème", "6ème", "7ème",
                    "8ème""9ème", "afin", "ai", "ainsi", "ais", "ait", "alors", "après", "as", "assez", "au",
                    "aucun", "õ",
                    "télécharger", "pdf", "abord", "aucun", "auprès", "auquel", "auquelles", "auquels", "auraient",
                    "aurais", "aurait", "aurez",
                    "auriez", "aurions", "aurons", "auront", "aussitôt", "autre", "autres", "aux", "avaient",
                    "avais", "avait", "avant", "avec", "avez", "aviez", "avoir", "avons", "ayant", "beaucoup", "c'",
                    "car", "ce", "ceci", "cela", "celle", "celles", "celui", "cependant", "certes", "ces", "cet",
                    "ceux", "chaque", "ci-dessous", "ci-dessus", "ci-haut", "comme", "comment", "contre", "d'", "dans",
                    "de", "debout", "dedans", "dehors", "delà", "depuis", "derrière", "des", "dès", "desdits",
                    "desdites",
                    "deux", "devant", "devers", "devra", "différents", "dire", "divers", "dix", "doit", "donc", "dont",
                    "douze", "du", "duquel", "durant", "dès", "effet", "elle", "elles", "en", "encore", "entre",
                    "envers",
                    "est", "et", "étaient", "étais", "était", "étant", "été", "étée", "étées", "étés", "êtes", "être",
                    "eu", "eue", "eues", "eurent", "eus", "eusse", "eussent", "eusses", "eussiez", "eussions", "eut",
                    "eux", "excepté", "hors", "huit", "huitième", "il", "ils", "j'ai", "jusqu'à", "la", "là",
                    "laquelle",
                    "le", "lequel", "les", "lesquelles", "lesquels", "leur", "leurs", "lors", "lorsque", "ma", "maint",
                    "mais", "malgré", "me", "même", "mêmes", "merci", "mes", "mien", "mienne", "miennes", "miens",
                    "moi", "moins", "mon", "moyennant", "n'avait", "n'y", "ne", "néanmoins", "neuf", "neuvième", "ni",
                    "nombreuses", "nombreux", "non", "nos", "notre", "nôtre", "nôtres", "nous", "nul", "on", "ont",
                    "ou", "outre", "par", "parmi", "partant", "pas", "pendant", "personne", "peu", "plusieurs", "pour",
                    "pourquoi", "proche", "qu", "quand", "quant", "quarante", "quatorze", "quatre", "quatre-vingt",
                    "quatre-vingt-dix", "quatre-vingt-cinq", "quatre-vingt-deux", "quatre-vingt-douze",
                    "quatre-vingt-huit",
                    "quatre-vingt-neuf", "quatre-vingt-onze", "quatre-vingt-quatorze", "quatre-vingt-quatre",
                    "quatre-vingt-seize", "quatre-vingt-sept", "quatre-vingt-six", "quatre-vingt-treize",
                    "quatre-vingt-trois", "quatre-vingt-un", "quatre-vingt-une", "quatre-vingts", "que", "quel",
                    "quelle",
                    "quelles", "quelque", "quelques", "quelqu'", "quelqu'un", "qui", "quiconque", "quinze", "quoi",
                    "revoici", "revoilà", "rien", "sa", "sans", "sauf", "se", "seize", "selon", "sept", "septième",
                    "sera", "serai", "seraient", "serais", "serait", "seras", "serez", "seriez", "serions", "serons",
                    "seront", "ses", "si", "sien", "sienne", "siennes", "siens", "sinon", "six", "sixième", "soi",
                    "soi-même", "soit", "son", "sont", "sous", "soyez", "soyons", "suis", "suivant", "sur",
                    "surtout", "t'", "ta", "tac", "tant", "te", "tel", "telle", "telles", "tels", "tes", "tic", "tien",
                    "tienne", "tiennes", "tiens", "toc", "toi", "ton", "toujours", "tous", "tout", "toute", "toutes",
                    "treize", "trente", "très", "trois", "troisième", "tu", "un", "une", "unes", "uns", "va", "vais",
                    "valeur", "vas", "vé", "vers", "via", "vif", "vifs", "vingt", "vivat", "vive", "vives", "vlan",
                    "voici", "voie", "voient", "voilà", "voire", "vont", "vos", "votre", "vôtre", "vôtres", "vous",
                    "vu", "y", "à", "y", "zéro", "l'", "s'", "n'", "j'", "qu'", "d'", "c'", "qu'", 'ne', "m'",
                    "d'abord", "tant", "tout", "toute", "toutes", "trop", "ci", "pu", "pres", "deja", "vais",
                    "aurai", "soit", "ptt", "etait", "su", "va", "fr",
                    "veux", "chers", "chac", "les", "qui", "pour", "c'est", "aussi", "plus", "tout", "mais", "ou",
                    "cest", "for",
                    "est", "donc", "or", "ni", "car", "à", "dans", "par", "pour", "en", "vers", "avec", "de", "sans",
                    "sous", "sur", "d'abord", "alors", "depuis", "deux", "dont", "fois", "parce que", "parce", "sais",
                    "-elle", "-il", "10ème", "1er", "1ère", "2ème", "3ème", "4ème", "5ème", "6ème", "7ème",
                    "8ème""9ème", "afin", "ai", "ainsi", "ais", "ait", "alors", "après", "as", "assez", "au",
                    "aucun",
                    "télécharger", "pdf", "abord",
                    "aucune", "auprès", "auquel", "auquelles", "auquels", "auraient", "aurais", "aurait", "aurez",
                    "auriez", "aurions", "aurons", "auront", "aussi", "aussitôt", "autre", "autres", "aux", "avaient",
                    "avais", "avait", "avant", "avec", "avez", "aviez", "avoir", "avons", "ayant", "beaucoup", "c'",
                    "car", "ce", "ceci", "cela", "celle", "celles", "celui", "cependant", "certes", "ces", "cet",
                    "cette", "ceux", "chacun", "chacune", "chaque", "chez", "cinq", "comme", "d'", "d'abord", "dans",
                    "de", "dehors", "delà", "depuis", "des", "dessous", "dessus", "deux", "deça", "dix", "doit", "donc",
                    "dont", "du", "durant", "dès", "déjà", "elle", "elles", "en", "encore", "enfin", "entre", "er",
                    "est", "est-ce", "et", "etc", "eu", "eurent", "eut", "faut", "fur", "hormis", "hors", "huit", "il",
                    "2", "0", "1",
                    "ils", "j'", "je", "jusqu'", "l'", "la", "laquelle", "le", "lequel", "les", "lesquels", "leur",
                    "leurs", "lors", "lorsque", "lui", "là", "m'", "ma", "mais", "malgré", "me", "melle", "mes", "mm",
                    "mme",
                    "moi", "moins", "mon", "mr", "même", "mêmes", "n'", "neuf", "ni", "non-", "nos", "notamment",
                    "notre", "nous", "néanmoins", "nôtres", "on", "ont", "ou", "où", "par", "parce", "parfois", "parmi",
                    "partout", "pas", "pendant", "peu", "peut", "peut-être", "plus", "plutôt", "pour", "pourquoi",
                    "près", "puisqu'", "puisque", "qu'", "quand", "quant", "quatre", "que", "quel", "quelle", "quelles",
                    "quelqu'", "quelque", "quelquefois", "quelques", "quels", "qui", "quoi", "quot", "s'", "sa", "sans",
                    "se", "sept", "sera", "serai", "seraient", "serais", "serait", "seras", "serez", "seriez", "qu",
                    "serions", "serons", "seront", "ses", "si", "sien", "siennes", "siens", "sitôt", "six", "soi",
                    "sommes", "son", "sont", "sous", "souvent", "suis", "sur", "t'", "toi", "ton", "toujours", "tous",
                    "tout", "toutefois", "toutes", "tes", "trois", "tu", "un", "une", "unes", "uns", "voici", "voilà",
                    "9ème", "a", "afin", "ai", "ainsi", "ais", "ait", "alors", "après", "as", "assez", "au", "aucun",
                    "télécharger", "pdf", "abord", "þÿ",
                    "aucune", "auprès", "auquel", "auquelles", "auquels", "auraient", "aurais", "aurait", "aurez",
                    "auriez", "aurions", "aurons", "auront", "aussi", "aussitôt", "autre", "autres", "aux", "avaient",
                    "avais", "avait", "avant", "avec", "avez", "aviez", "avoir", "avons", "ayant", "beaucoup", "c'",
                    "car", "ce", "ceci", "cela", "celle", "celles", "celui", "cependant", "certes", "ces", "cet",
                    "cette", "ceux", "chacun", "chacune", "chaque", "chez", "cinq", "comme", "d'", "d'abord", "dans",
                    "de", "dehors", "delà", "depuis", "des", "dessous", "dessus", "deux", "deça", "dix", "doit", "donc",
                    "dont", "du", "durant", "dès", "déjà", "elle", "elles", "en", "encore", "enfin", "entre", "er",
                    "est", "est-ce", "et", "etc", "eu", "eurent", "eut", "faut", "fur", "hormis", "hors", "huit", "il",
                    "ils", "j'", "je", "jusqu'", "l'", "la", "laquelle", "le", "lequel", "les", "lesquels", "leur",
                    "leurs", "lors", "lorsque", "lui", "là", "m'", "ma", "mais", "malgré", "me", "melle", "mes", "mm",
                    "mme",
                    "moi", "moins", "mon", "mr", "même", "mêmes", "n'", "neuf", "ni", "non-", "nos", "notamment",
                    "notre", "nous", "néanmoins", "nôtres", "on", "ont", "ou", "où", "par", "parce", "parfois", "parmi",
                    "partout", "pas", "pendant", "peu", "peut", "peut-être", "plus", "plutôt", "pour", "pourquoi",
                    "près", "puisqu'", "puisque", "qu'", "quand", "quant", "quatre", "que", "quel", "quelle", "quelles",
                    "quelqu'", "quelque", "quelquefois", "quelques", "quels", "qui", "quoi", "quot", "s'", "sa", "sans",
                    "se", "sept", "sera", "serai", "seraient", "serais", "serait", "seras", "serez", "seriez",
                    "serions", "serons", "seront", "ses", "si", "sien", "siennes", "siens", "sitôt", "six", "soi",
                    "sommes", "son", "sont", "sous", "souvent", "suis", "sur", "t'", "toi", "ton", "toujours", "tous",
                    "tout", "toutefois", "toutes", "tes", "trois", "tu", "un", "une", "unes", "uns", "voici", "voilà",
                    "vos",
                    "votre", "vous", "vôtres", "y", "à", "ème", "étaient", "étais", "était", "étant", "étiez", "étions",
                    "êtes", "être", "afin", "ainsi", "alors", "après", "aucun", "aucune", "auprès", "auquel", "aussi",
                    "autant", "aux", "avec", "car", "ceci", "cela", "celle", "celles", "celui", "cependant", "ces",
                    "cet", "cette", "ceux", "chacun", "chacune", "chaque", "chez", "comme", "comment", "dans", "des",
                    "donc", "donné", "dont", "duquel", "dès", "déjà", "elle", "elles", "encore", "entre", "étant",
                    "etc", "été", "eux", "furent", "grâce", "hors", "ici", "ils", "jusqu", "les", "leur", "leurs",
                    "puis", "fait", "lors", "lui", "mais", "malgré", "mes", "õ", "meme", "ete", "hui"]
    # Enlève les caractères en trop
    text = sub(r'[^\w\s]', ' ', text)
    text = text.replace("_", " ")
    # On retire les doublons
    banned_words = list(set(banned_words))
    # Transformation du texte en corpus (liste de words)
    corpus = text.split(" ")
    corpus = [word for word in corpus if word not in banned_words]  # on supprime les stopwords
    # garde seulement les words de plus de 3 lettres et qui ne contiennent pas de chiffres ni d'espaces inutiles
    corpus = [word for word in corpus if
              len(word) > 3 and not any(char.isdigit() for char in word) and re.match(r'^\w+$', word) or re.match(
                  r'^oe+$', word)]
    text = " ".join(corpus)  # on retransforme le corpus en texte
    # supprime les espaces en double
    text = text.replace("  ", " ")
    return text  # on retourne le texte nettoyé


def lemmatize(text: str) -> str:
    """
    Lemmatise le texte passé en paramètre (enlève les terminaisons des mots en gardant la racine) | méthode n°1 (avec spacy)
        :param text: Texte à lemmatiser
        :type text: str
        :return: Texte lemmatisé
        :rtype: str
    """
    lemmatized_words = []
    text = nlp(text)  # on crée un objet nlp
    for token in text:  # on itère sur les tokens
        if not token.is_stop:  # on ne garde que les words qui ne sont pas des stopwords
            lemmatized_words.append(token.lemma_)  # on ajoute le lemme du word à la liste
    lemmatized_text = " ".join(lemmatized_words)  # on reconstitue le texte

    return lemmatized_text  # on retourne le texte lemmatisé


def stemming(text):
    """
    Stemming du texte passé en paramètre (enlève les terminaisons des mots en gardant la racine) | méthode n°2 (avec spacy)
        :param text: Texte à stemmer
        :type text: str
        :return: Texte stemmé
        :rtype: str
    """
    stemmed_words = []
    text = nlp2(text)  # on crée un objet nlp
    for token in text:  # on itère sur les tokens
        if not token.is_stop:  # on ne garde que les words qui ne sont pas des stopwords
            stemmed_words.append(token.lemma_)  # on ajoute le lemme du word à la liste
    stemmed_text = " ".join(stemmed_words)  # on reconstitue le texte
    return stemmed_text  # on retourne le texte stemmé
