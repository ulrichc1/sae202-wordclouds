import requests
from bs4 import BeautifulSoup
import time
from selenium import webdriver
from pytube import YouTube
import os



class downloadYT:
    def __init__(self,link):
        self.__link=link
        self.getlinks()

        self.download_mp3()

    def login_gmail(self,driver, email, passw):
        from selenium import webdriver
        # Initialise le navigateur
        driver = webdriver.Firefox()

        # Navigue vers la page de connexion
        driver.get("https://www.youtube.com/account")

        # Entre les informations de connexion
        username = driver.find_element_by_id("username")
        password = driver.find_element_by_id("password")
        username.send_keys("your_username")
        password.send_keys("your_password")

        # Soumet le formulaire de connexion
        driver.find_element_by_id("submit").click()

        # Navigue vers la page de la playliste 'like'
        driver.get("https://www.youtube.com/playlist?list=LL")

        # Obtient le code HTML de la page
        html = driver.page_source

        # Affiche le code HTML
        print(html)

        # Ferme le navigateur
        driver.quit()

    def getlinks(self):
        driver = webdriver.Chrome()
        driver.get(self.__link)
        time.sleep(80)
        soup = BeautifulSoup(driver.page_source, features='lxml')
        self.__list_video = {link.get('title'): "https://www.youtube.com/" + str(link.get('href')) for link in soup.find_all("a") if link.get('href') != None and link.get('title') != None and link.get('href').startswith('/watch?')}
        driver.close()
        return self.__list_video


    def download_mp3(self):
        for cle,valeur in self.__list_video.items():
            if os.path.isfile(cle+".mp3") == False:
                out_file=YouTube(valeur).streams.filter(only_audio=True).first().download(output_path=".")
                base, ext = os.path.splitext(out_file)
                new_file = base + '.mp3'
                os.rename(out_file, new_file, exist_ok=True)

    def connection(self):
        "https://accounts.google.com/v3/signin/identifier?dsh=S-1123738282%3A1671993860743744&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dfr%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F%253Fhl%253DFR&hl=fr&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh601wxki5fo6GG-Zx6hRvtQFnN7D751BpKbdR_PQAwCWDDXG8OVg-l6BHdo6U6nP2KaElXO0Q"

def login(url,usernameId, username, passwordId, password, submit_buttonId):
   driver.get(url)
   driver.find_element_by_id(usernameId).send_keys(username)
   driver.find_element_by_id(passwordId).send_keys(password)
   driver.find_element_by_id(submit_buttonId).click()

downloadYT('https://www.youtube.com/playlist?li'
           'st=LL')