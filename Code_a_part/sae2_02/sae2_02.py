# -*- coding: utf8 -*-
from tkinter import *
from tkinter.filedialog import askopenfilename
from PIL import Image, ImageTk
import module


# -------------Definition---------------------
def savelastclickpos(event):
    global lastClickX, lastClickY
    lastClickX = event.x
    lastClickY = event.y


def dragging(event):
    x, y = event.x - lastClickX + Mafenetre.winfo_x(), event.y - lastClickY + Mafenetre.winfo_y()
    Mafenetre.geometry("+%s+%s" % (x, y))


class image:
    def __init__(self):
        self.__filename = 0
        self.Ouvrir()

    def Ouvrir(self):
        self.__filename = askopenfilename(title="Ouvrir une image", filetypes=(("PDF", "*.pdf"),("All Files", "*.*")))
        if self.__filename:
            self._nuage_de_mot(module.lire_pdf(self.__filename))

    def _nuage_de_mot(self, text):
        # Créer un nuage de mots à partir du texte
        wordcloud = module.création_nuage(text)

        # Convertir l'image du nuage de mots en format Tkinter
        image = wordcloud.to_image()
        self.sauvegarder_image(image,"file.png")
        image_tk = ImageTk.PhotoImage(image)

        # Afficher l'image sur le canevas Tkinter
        Canevas.create_image(100, 100, anchor=NW, image=image_tk)

    def sauvegarder_image(self,image,namefile):
        image.save(namefile, "PNG")


    def Fermer(self):
        Canevas.delete(ALL)
        Valeur2.set(1)
        hide()
        Mafenetre.geometry("%dx%d" % (300, 200))
        self.__filename = 0


def affichescale():
    echelle.place(x=1, y=1)
    Mafenetre.after(35000, echelle.place_forget)
    echelle2.place_forget()


def cachescale():
    echelle.place_forget()
    echelle2.place(x=1, y=1)
    Mafenetre.after(35000, echelle2.place_forget)


def maj(opa):
    Mafenetre.attributes('-alpha', float(opa))


def hide():
    echelle.place_forget()
    echelle2.place_forget()


# ---------------TK-------------------
Mafenetre = Tk()
Mafenetre.update_idletasks()
Mafenetre.attributes('-topmost', True)
Mafenetre.overrideredirect(1)

# --------------Canvas--------------------
Canevas = Canvas(Mafenetre, bd=0, highlightthickness=0)
Canevas.pack(side="left", fill="both", expand="yes")
Canevas.configure(bg='black')
# ---------------TK 2---------------------
image = image()


# ---------------Move-------------------
Canevas.bind('<Button-1>', savelastclickpos)
Canevas.bind('<B1-Motion>', dragging)
# ----------Menu du haut----------------
menubar = Menu(Mafenetre)
menufichier = Menu(menubar, tearoff=False)
menufichier.add_command(label="Ouvrir une image", command=image.Ouvrir)
menufichier.add_command(label="Sans image", command=image.Fermer)
menufichier.add_command(label="Quitter", command=Mafenetre.destroy)
menubar.add_cascade(label="Fichier", menu=menufichier)
menuaide = Menu(menubar, tearoff=False)
menuaide.add_command(label="Opacité", command=affichescale)
menuaide.add_command(label="Resize", command=cachescale)
menuaide.add_command(label="Tout caché", command=hide)
menubar.add_cascade(label="Modifié paramètre", menu=menuaide)
Mafenetre.config(menu=menubar)

Mafenetre.mainloop()
