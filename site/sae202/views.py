from django.shortcuts import render
import os
import sys


# Vues pour les pages HTML

def index(request):
    """
    Vue pour la page d'accueil
        :param request: Requête HTTP
        :type request: HttpRequest
        :return: Page HTML
        :rtype: HttpResponse
    """
    return render(request, "index.html")


