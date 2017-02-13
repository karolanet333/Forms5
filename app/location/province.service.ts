import {Province} from './province'

export class ProvinceService{

    getProvinces(
        countryId: number 
    ): Province[]{

        var provinces: Province[];

        switch(countryId){
            //argentina
            case 1:
                provinces = [
                    new Province(1, "Buenos Aires"),
                    new Province(2, "Chaco"),
                    new Province(3, "Formosa"),
                    new Province(4, "Cordoba")    
                ];
                break;
            //brasil
            case 2:
                provinces = [
                    new Province(5, "Brasil prov 1"),
                    new Province(6, "Brasil prov 2"),
                    new Province(7, "Brasil prov 3"),
                    new Province(8, "Brasil prov 4")    
                ];
                break;
            //chile
            case 3:
                provinces = [
                    new Province(9, "Chile prov 1"),
                    new Province(10, "Chile prov 2"),
                    new Province(11, "Chile prov 3"),
                    new Province(12, "Chile prov 4")    
                ];
                break;
            //eeuu
            case 4:
                provinces = [
                    new Province(13, "EEUU prov 1"),
                    new Province(14, "EEUU prov 2"),
                    new Province(15, "EEUU prov 3"),
                    new Province(16, "EEUU prov 4")    
                ];
                break;
        }

        return provinces;
    }
}