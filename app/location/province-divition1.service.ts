import {ProvinceDivition1} from './province-divition1'

export class provinceDivition1Service{
    getProvinceDivitions1(
        provinceId: number
    ) : ProvinceDivition1[]{

        var provinceDivitions1: ProvinceDivition1[];

        switch(provinceId){
            //Argentina
            //Buenos Aires
            case 1:
                provinceDivitions1 = [
                    new ProvinceDivition1(1, "Lanus"),
                    new ProvinceDivition1(2, "Avellaneda"),
                    new ProvinceDivition1(3, "Lomas de Zamora"),
                    new ProvinceDivition1(4, "Morón")
                ];
                break;
            //Argentina
            //Chaco
            case 2:
                provinceDivitions1 = [
                    new ProvinceDivition1(5, "Chaco 1"),
                    new ProvinceDivition1(6, "Chaco 2"),
                    new ProvinceDivition1(7, "Chaco 3"),
                    new ProvinceDivition1(8, "Chaco 4")
                ];
                break;
            //Argentina
            //Formosa
            case 3:
                provinceDivitions1 = [
                    new ProvinceDivition1(9, "Formosa 1"),
                    new ProvinceDivition1(10, "Formosa 2"),
                    new ProvinceDivition1(11, "Formosa 3"),
                    new ProvinceDivition1(12, "Formosa 4")
                ];
                break;
            //Argentina
            //Cordoba
            case 4:
                provinceDivitions1 = [
                    new ProvinceDivition1(13, ""),
                    new ProvinceDivition1(14, ""),
                    new ProvinceDivition1(15, ""),
                    new ProvinceDivition1(16, "")
                ];
                break;
            //Brasil
            //Brasil prov 1
            case 5:
                provinceDivitions1 = [
                    new ProvinceDivition1(17, ""),
                    new ProvinceDivition1(18, ""),
                    new ProvinceDivition1(19, ""),
                    new ProvinceDivition1(20, "")
                ];
                break;
            //Brasil
            //Brasil prov 2
            case 6:
                provinceDivitions1 = [
                    new ProvinceDivition1(21, ""),
                    new ProvinceDivition1(22, ""),
                    new ProvinceDivition1(23, ""),
                    new ProvinceDivition1(24, "")
                ];
                break;
            //Brasil
            //Brasil prov 3
            case 7:
                provinceDivitions1 = [
                    new ProvinceDivition1(25, ""),
                    new ProvinceDivition1(26, ""),
                    new ProvinceDivition1(27, ""),
                    new ProvinceDivition1(28, "")
                ];
                break;
            //Brasil
            //Brasil prov 4
            case 8:
                provinceDivitions1 = [
                    new ProvinceDivition1(29, ""),
                    new ProvinceDivition1(30, ""),
                    new ProvinceDivition1(31, ""),
                    new ProvinceDivition1(32, "")
                ];
                break;
            //Chile
            //Chile prov 1
            case 8:
                provinceDivitions1 = [
                    new ProvinceDivition1(33, ""),
                    new ProvinceDivition1(34, ""),
                    new ProvinceDivition1(35, ""),
                    new ProvinceDivition1(36, "")
                ];
                break;
            //Chile
            //Chile prov 2
            case 8:
                provinceDivitions1 = [
                    new ProvinceDivition1(37, ""),
                    new ProvinceDivition1(38, ""),
                    new ProvinceDivition1(39, ""),
                    new ProvinceDivition1(40, "")
                ];
                break;
            //Chile
            //Chile prov 3
            case 8:
                provinceDivitions1 = [
                    new ProvinceDivition1(41, ""),
                    new ProvinceDivition1(42, ""),
                    new ProvinceDivition1(43, ""),
                    new ProvinceDivition1(44, "")
                ];
                break;
            //Chile
            //Chile prov 4
            case 8:
                provinceDivitions1 = [
                    new ProvinceDivition1(45, ""),
                    new ProvinceDivition1(46, ""),
                    new ProvinceDivition1(47, ""),
                    new ProvinceDivition1(48, "")
                ];
                break;
            //EEUU
            //EEUU prov 1
            case 8:
                provinceDivitions1 = [
                    new ProvinceDivition1(49, ""),
                    new ProvinceDivition1(50, ""),
                    new ProvinceDivition1(51, ""),
                    new ProvinceDivition1(52, "")
                ];
                break;
            //EEUU
            //EEUU prov 2
            case 8:
                provinceDivitions1 = [
                    new ProvinceDivition1(53, ""),
                    new ProvinceDivition1(54, ""),
                    new ProvinceDivition1(55, ""),
                    new ProvinceDivition1(56, "")
                ];
                break;
            //EEUU
            //EEUU prov 3
            case 8:
                provinceDivitions1 = [
                    new ProvinceDivition1(57, ""),
                    new ProvinceDivition1(58, ""),
                    new ProvinceDivition1(59, ""),
                    new ProvinceDivition1(60, "")
                ];
                break;
            //EEUU
            //EEUU prov 4
            case 8:
                provinceDivitions1 = [
                    new ProvinceDivition1(61, ""),
                    new ProvinceDivition1(62, ""),
                    new ProvinceDivition1(63, ""),
                    new ProvinceDivition1(64, "")
                ];
                break;
        }

        return provinceDivitions1;
    }
}