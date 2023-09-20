$(function () {
    function updateCountdown(targetDate) {
      var currentDate = new Date();
      var difference = targetDate - currentDate;
    
      if (difference <= 0) {
        // A data alvo já passou.
        $('#clock-c').html(''
          + '<span class="h1 font-weight-bold">0</span> Dias'
          + '<span class="h1 font-weight-bold">0</span> Hr'
          + '<span class="h1 font-weight-bold">0</span> Min'
          + '<span class="h1 font-weight-bold">0</span> Sec');
      } else {
        var daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hoursRemaining = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesRemaining = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var secondsRemaining = Math.floor((difference % (1000 * 60)) / 1000);
    
        $('#clock-c').html(''
          + '<span class="h1 font-weight-bold">' + daysRemaining + '</span> Dia' + (daysRemaining !== 1 ? 's' : '') + ''
          + '<span class="h1 font-weight-bold">' + hoursRemaining + '</span> Hr'
          + '<span class="h1 font-weight-bold">' + minutesRemaining + '</span> Min'
          + '<span class="h1 font-weight-bold">' + secondsRemaining + '</span> Sec');
        
        // Agende a próxima atualização a cada segundo.
        setTimeout(function() {
          updateCountdown(targetDate);
        }, 1000);
      }
    }
    
    // Defina a data de destino para a qual você deseja calcular os dias restantes.
    var targetDate = new Date("2023-10-21"); // Substitua com a data desejada no formato "YYYY-MM-DD".
    
    // Inicialize a contagem regressiva.
    updateCountdown(targetDate);
    
    
    });
    