import { useState } from 'react';

function Iletisim() {


    const [formAlanlari, formAlanlariGuncelle] = useState({});

    const topluGuncelleme = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        formAlanlariGuncelle(values => ({ ...values, [name]: value }))


    }


    const formGonder = (olay) => {
        olay.preventDefault();//formun tarayıcı tarafında gönderme işlemi durdurma fonkiyonu



        if (!formAlanlari.isim || formAlanlari.isim.length < 2){
            alert ("İsim uzunluğu 2'den küçük olamaz");
            return;
        }

        if (formAlanlari.isim?.length > 10) {
            alert("Dikkat! İsim uzunlugu 10'dan büyük olamaz");
            return;

        }

        if (formAlanlari.soyad?.length > 10) {
            alert("Dikkat! Uzunluk  2'den küçük olamaz");
            return;
        }
    

    if (formAlanlari.telefon?.length > 10) {
        alert("Dikkat! 10 haneli numaranızı giriniz");
        return;
    }


    if (formAlanlari.site?.length > 100) {
        alert("Dikkat! 100'den büyük olamaz ");
        return;
    }


    alert("Mesaj Gönderildi");
}


return (
    <>
        <form onSubmit={formGonder}>
            <div>
                <p>İsim:</p>
                <input name='ad' type="text " onChange={topluGuncelleme} />
                {formAlanlari?.isim?.length}
    </div>
            <div><p>Soyad:</p>
                <input name='soyad' type="text " onChange={topluGuncelleme} />
                {formAlanlari?.soyad?.length}



            </div>


            <div><p>Telefon:</p>
                <input name='telefon' type="text " onChange={topluGuncelleme} />
                {formAlanlari?.telefon?.length}




            </div>


            <div><p>Site Adres:</p>
                <input name='site' type="text " onChange={topluGuncelleme} />
                {formAlanlari?.site?.length}



            </div>

            <div><p>Bizi Nereden Duydunuz?</p>
                <select name='neredenduyuldu' onChange={topluGuncelleme}>
                    <option value="Google">Google</option>
                    <option value="Arkadaş">Arkadaş</option>
                    <option value="İnstagram">İnstagram</option>
                </select>



            </div>

            <div><p>Mesaj:</p>
                <textarea name='mesaj' type="text " onChange={topluGuncelleme} />
                {formAlanlari?.mesaj?.length}

                



            </div>

    
            <button type="submit">Gönder</button>

        </form>


    </>

)


}
export default Iletisim;