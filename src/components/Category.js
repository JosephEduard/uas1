import React, {useState} from "react"
import "../style/menu.css"

const Category = (categoryDataToApp) => {

    const [selectedCategory, setSelectedCategory] = useState("");

    const categoryClick = (category) =>{
        setSelectedCategory(category);
        const cat = {selectedCategory};
        categoryDataToApp(cat);
    };

    const catClick = () => { 
        
    }

    return (
        <div className="w-3/4 m-auto">
            <div className="x-cat-title">
                <h3>Kategori</h3>
            </div>
            <div className=" x-cat-group flex justify-center align-center rounded-xl">
                <div className="x-cat">
                    <div className="x-cat-img rounded-full flex justify-center align-center" onClick={() => categoryClick("RPG")}>
                        <img src="/assets/icons/rpg.png" alt="" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center align-center">
                        <span className="x-cat-title">RPG</span>
                    </div>
                </div>
                <div className="x-cat">
                    <div className="x-cat-img rounded-full flex justify-center align-center" onClick={() => categoryClick("Petualangan")}>
                        <img src="/assets/icons/petualangan.png" alt="" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center align-center">
                        <span className="x-cat-title">Petualangan</span>
                    </div>
                </div>
                <div className="x-cat">
                    <div className="x-cat-img rounded-full flex justify-center align-center" onClick={() => categoryClick("Balapan")}>
                        <img src="/assets/icons/balapan.png" alt="" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center align-center">
                        <span className="x-cat-title">Balapan</span>
                    </div>
                </div>
                <div className="x-cat">
                    <div className="x-cat-img rounded-full flex justify-center align-center" onClick={() => categoryClick("Aksi")}>
                        <img src="/assets/icons/aksi.png" alt="" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center align-center">
                        <span className="x-cat-title">Aksi</span>
                    </div>
                </div>
                <div className="x-cat">
                    <div className="x-cat-img rounded-full flex justify-center align-center" onClick={() => categoryClick("Strategi")}>
                        <img src="/assets/icons/strategi.png" alt="" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center align-center">
                        <span className="x-cat-title">Strategi</span>
                    </div>
                </div>
                <div className="x-cat">
                    <div className="x-cat-img rounded-full flex justify-center align-center" onClick={() => categoryClick("Simulasi")}>
                        <img src="/assets/icons/simulator.png" alt="" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center align-center">
                        <span className="x-cat-title">Simulasi</span>
                    </div>
                </div>
                <div className="x-cat">
                    <div className="x-cat-img rounded-full flex justify-center align-center" onClick={() => categoryClick("horor")}>
                        <img src="/assets/icons/horror.png" alt="" className="w-16 h-16" />
                    </div>
                    <div className="flex justify-center align-center">
                        <span className="x-cat-title">Horor</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category