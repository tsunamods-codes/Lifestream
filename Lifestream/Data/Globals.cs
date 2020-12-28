using ElectronNET.API;
using System;

namespace Lifestream.Data
{
    public class Globals
    {
        BrowserWindow mainWindow;

        private static Globals instance;

        public static Globals GetInstance()
        {
            if(instance == null)
            {
                instance = new Globals();
            }
            return instance;
        }

        private Globals()
        {

        }

        public BrowserWindow MainWindow
        {
            get { return mainWindow; }
            set 
            { 
                if(mainWindow == null)
                {
                    mainWindow = value;
                }
                else
                {
                    throw new Exception("Can't change main window once it's set");
                }
            }
        }
    }
}
