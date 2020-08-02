import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Form Pembelian Buah</h1>
    
        <form>
    
            <div className="form-group">
                <label for="nama">Nama Pelanggan</label>
                <input type="text" name="" id="nama"/>
            </div>
            
            <div className="form-group">
                <label className="">Daftar Item</label>
                <div  className="option">
                    <div>
                        <input type="checkbox" /><span>Semangka</span>
                    </div>
                    <div>
                        <input type="checkbox" /><span>Jeruk</span>
                    </div>
                    <div>
                        <input type="checkbox" /><span>Nanas</span>
                    </div>
                    <div>
                        <input type="checkbox" /><span>Salak</span>
                    </div>
                    <div>
                        <input type="checkbox" /><span>Anggur</span>
                    </div>
                    
                </div>	
            </div> 

            <button className="button" type="submit">Kirim</button>
        </form>
      </div>
    </div>
  );
}

export default App;
