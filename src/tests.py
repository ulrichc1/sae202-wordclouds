import unittest
from unittest.mock import mock_open, patch
import pdf_treatment
import cleaning


class TestCleaning(unittest.TestCase):
    """
    Classe de test du module cleaning
    """
    def test_preprocess(self):
        """
        Test de la fonction preprocess (nettoyage de texte)
            :return:
        """
        text = 'lorem ipsum'
        self.assertEqual(cleaning.preprocess(text), 'lorem ipsum')

        text2 = "je ne vais pas télécharger ce pdf voyons."
        expected_output = "voyons"
        self.assertEqual(cleaning.preprocess(text2).strip(), expected_output)

        text3 = "c'est l'un des meilleurs livres que j'ai jamais lu."
        expected_output2 = "meilleurs livres jamais"
        self.assertEqual(cleaning.preprocess(text3).strip(), expected_output2)

        text4 = "il était une fois un petit chiot qui aimait jouer dans le parc."
        expected_output3 = "petit chiot aimait jouer parc"
        self.assertEqual(cleaning.preprocess(text4).strip(), expected_output3)

        text5 = "le professeur a demandé à ses élèves de lire le texte à haute voix."
        expected_output4 = "professeur demandé élèves lire texte haute voix"
        self.assertEqual(cleaning.preprocess(text5).strip(), expected_output4)
