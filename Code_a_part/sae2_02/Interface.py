import sys
import PyPDF2
import module
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QApplication, QLabel,QAction, QMainWindow,QMenuBar,QMenu,QToolBar, QFileDialog
from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg as FigureCanvas

class Window(QMainWindow):
    """Main Window."""
    def __init__(self, parent=None):
        """Initializer."""
        super().__init__(parent)
        self.setWindowTitle("Python Menus & Toolbars")
        self._createMenuBar()
        self.resize(400, 200)
        self.centralWidget = QLabel("Hello, World")
        self.centralWidget.setAlignment(Qt.AlignHCenter | Qt.AlignVCenter)
        self.setCentralWidget(self.centralWidget)
        self._createToolBars()

    def _createMenuBar(self):
        menuBar = self.menuBar()
        # Creating menus using a QMenu object
        fileMenu = QMenu("&File", self)
        menuBar.addMenu(fileMenu)
        # Creating menus using a title
        editMenu = menuBar.addMenu("&Edit")
        helpMenu = menuBar.addMenu("&Help")

    def _createMenuBar(self):
        menuBar = QMenuBar(self)
        self.setMenuBar(menuBar)

    def _createToolBars(self):
        # Using a title
        menubar = self.menuBar()
        fileMenu = menubar.addMenu('File')
        editMenu = menubar.addMenu('Edit')

        NewAction = QAction('New', self)
        NewAction.triggered.connect(self._openFile)
        fileMenu.addAction(NewAction)

        self.setWindowTitle('Menu Bar Example')
    def _openFile(self):
        fileName, _ = QFileDialog.getOpenFileName(self, 'Open File', '', 'Text Files (*.pdf);;All Files (*)')
        if fileName:
            self._nuage_de_mot(module.lire_pdf(fileName))

    def _nuage_de_mot(self,text):
        print("b")
        image =  module.création_nuage(module.lire_pdf(text)).to_image()
        image_tk = ImageTk.PhotoImage(image)
        self.canvas = module.création_nuage(module.lire_pdf(text))
        print('aaa')

        self.layout_plot.addWidget(self.canvas)
        self.show()


if __name__ == "__main__":
    app = QApplication(sys.argv)
    win = Window()
    win.show()
    sys.exit(app.exec_())
    print("n")