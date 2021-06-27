import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/Angeler.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";

export default function alertError(){
    error({
        text:'Уточните запрос',
        title:'Ошибка',
        animation: 'fade',
        delay:500,
    });
}