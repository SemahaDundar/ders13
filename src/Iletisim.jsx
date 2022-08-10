import { useState } from 'react';

function Iletisim() {


    const [formAlanlari, formAlanlariGuncelle] = useState("");

    const topluGuncelleme =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        formAlanlariGuncelle(values =>({...values, [name]: value}))


    }
 
 


    const formGonder = (olay) => {
        olay.preventDefault();//formun tarayıcı tarafında gönderme işlemi durdurma fonkiyonu


        if (formAlanlari.isim.length > 10) {
            alert("Dikkat! Uzunluk 10'dan büyük olamaz")
            return;

        }

        if (formAlanlari.soyad.length > 10) {
            alert("Dikkat! Uzunluk  2'den küçük olamaz")
            return;
        }
    }

    if (formAlanlari.telefon.length > 10) {
        alert("Dikkat! 10 haneli numaranızı giriniz")
        return;
    }


    if (formAlanlari.site.length > 100) {
        alert("Dikkat! 100'den büyük olamaz ")
        return;
    }
}
            alert("Mesaj Gönderildi");

    return (
        <>
            <form onSubmit={formGonder}>
                <div><p>İsim:</p>
                    <input name='ad' type="text " onChange={topluGuncelle} />
                    {formAlanlari?.isim?.length}

                    <button type="submit">Gönder</button>



                </div>
                <div><p>Soyad:</p>
                    <input name='soyad' type="text " onChange={ topluGuncelle} />
                    {formAlanlari?.soyad?.length}

                    <button type="submit">Gönder</button>



                </div>


                <div><p>Telefon:</p>
                    <input name='telefon' type="text " onChange={topluGuncelle} />
                    {formAlanlari?.telefon?.length}

                    <button type="submit">Gönder</button>



                </div>

        
                <div><p>Site Adres:</p>
                    <input name='site' type="text " onChange={topluGuncelle} />
                    {formAlanlari?.site?.length}

                    <button type="submit">Gönder</button>



                </div>



            </form>


        </>

    )



export default Iletisim;