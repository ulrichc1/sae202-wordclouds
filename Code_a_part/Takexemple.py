# -*- coding: utf8 -*-
from tkinter import *
from tkinter.filedialog import askopenfilename
from PIL import Image, ImageTk


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
        self.__n = 1
        self.img = 0
        self.__h = 200
        self.__w = 300
        self.__filename = 0
        self.Ouvrir()

    def Ouvrir(self):
        self.__filename = askopenfilename(title="Ouvrir une image", filetypes=(("All Files", "*.*"), ("PNG", "*.png")))
        self.img = Image.open(self.__filename)
        self.__w = self.img.width
        self.__h = self.img.height
        self.modif()

    def modif(self):
        if self.__filename != 0:
            self.img = Image.open(self.__filename)
            Canevas.delete(ALL)
            self.img = self.img.resize((int(self.__n * self.__w), int(self.__n * self.__h)), Image.ANTIALIAS)
            photo = ImageTk.PhotoImage(self.img)
            gifdict[self.__filename] = photo
            Canevas.create_image(0, 0, anchor=NW, image=photo)
            Canevas.config(height=self.__n * self.__h, width=self.__n * self.__w)
            Mafenetre.geometry("%dx%d" % (self.__n * self.__w, self.__n * self.__h))

    def maj2(self, facteur):
        self.__n = float(facteur)
        self.modif()

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
Mafenetre.resizable(False, False)
Mafenetre.overrideredirect(1)
Mafenetre.geometry("%dx%d" % (300, 200))
gifdict = {}
# --------------Canvas--------------------
Canevas = Canvas(Mafenetre, bd=0, highlightthickness=0)
Canevas.pack(side="left", fill="both", expand="yes")
Canevas.configure(bg='black')
# ---------------TK 2---------------------
image = image()
# ---------------Scale1-------------------
Valeur = DoubleVar()
Valeur.set(1)
echelle = Scale(Canevas, from_=0.1, to=1, resolution=0.1, orient=HORIZONTAL, tickinterval=20, variable=Valeur,
                command=maj, background='grey')
# ---------------Scale2-------------------
Valeur2 = DoubleVar()
Valeur2.set(1)
echelle2 = Scale(Canevas, from_=0.1, to=2.5, resolution=0.1, orient=HORIZONTAL, tickinterval=20, variable=Valeur2,
                 command=image.maj2, background='grey')
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
