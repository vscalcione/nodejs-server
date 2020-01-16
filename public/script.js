var calcolaCodiceFiscale = function(){
    setTimeout(function(){
        $(this).closest('form').data('changed', true);
        var name = $('#name').val();
        var surname = $('#surname').val();
        var sex = $('input[name=sex]:checked').val();
        var birthDate = $('#birthDate').val();
        var nazioneNascita = $('#nazioneNascita option:selected').text();
        var comuneNascita = $('#comuneNascita option:selected').text();
        var provinciaNascita = $('#provinciaNascita option:selected').val();
        if(name != undefined && surname != undefined && sex != undefined && birthDate != undefined && nazioneNascita != undefined && comuneNascita != undefined && provinciaNascita != undefined){
            if(name != "" && surname != "" && sex != "" && birthDate != "" && nazioneNascita != "" && comuneNascita != "" && provinciaNascita != ""){
                var codiceFiscaleCalcolato = calcolaCodiceFiscale(name, surname, sex, birthDate, nazioneNascita, comuneNascita, provinciaNascita);
                $('#codiceFiscale').val(codiceFiscaleCalcolato);
            }
        }
    }, 200)
}

$(document).on('change', 'form :input', function(){
    calculateCF();
});

var calculateCF = function(name, surname, sex, birthDate, nazione, comune, provincia){
    var nazioneCampo = nazione;
    var comuneCampo = comune + "(" + provincia + ")";
    var array = birthDate.split("/").map(Number);
    var day = array[0];
    var month = array[1];
    var year = array[2]
    var cf;
    if(nazioneCampo === 'Italia')
        cf = FiscalCode.calculateFiscalCode(name, surname, sex, day, month, year, comuneCampo);
    else{
        var nazioneCampoStringa = nazioneCampo.toString();
        nazioneCampoStringa = nazioneCampoStringa+ " (EE)";
        cf = FiscalCode.calculateFiscalCode(name, surname, sex, day, month, year, nazioneCampoStringa);
    }
    return cf;
}



