function gravidade(){
    if (planeta == 'terra'){
        return console.log('A gravidade da terra é de 9.8 m/s²');
    } else if (planeta == 'lua'){
        return console.log('A gravidade da lua é de 1.6 m/s²');
    }
    else if (planeta == 'marte'){
        return console.log('A gravidade de marte é de 3.7 m/s²');
    }
    else if (planeta == 'jupiter'){
        return console.log('A gravidade de jupiter é de 24.8 m/s²');
    }
    else if (planeta == 'saturno'){
        return console.log('A gravidade de saturno é de 10.4 m/s²');
    }
}
gravidade(planeta = 'terra');
