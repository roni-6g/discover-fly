    //All working in One Function
    function ticketUpDown(ticket, isTicketUp){
        var ticketInput = document.getElementById( ticket + '-input' );
        var ticketCount = parseInt(ticketInput.value);
        var newTicketCount = ticketCount;
        if(isTicketUp == false && ticketCount > 0  ){
            newTicketCount = ticketCount - 1;
        }
        if(isTicketUp == true){
            newTicketCount = ticketCount + 1;
        }
        ticketInput.value = newTicketCount;
        if(ticket == 'first'){                
            var totalTicketCount = newTicketCount * 150;
        }
        if(ticket == 'economy'){                
            var totalTicketCount = newTicketCount * 100;
        };
        calculateTicketPrice();
    };

// Calculate All Ticket Price
    function calculateTicketPrice(){
        var firstClass = getTicketInput('first');
        var economyClass = getTicketInput('economy');
        var subTotalPrice = firstClass * 150 + economyClass * 100;
        var vat = Math.round(subTotalPrice * 0.10);
        var totalPrice = subTotalPrice + vat;
        document.getElementById('sub-total').innerText = '$' + subTotalPrice;
        document.getElementById('tax').innerText = '$' + vat;
        document.getElementById('total').innerText = '$' + totalPrice;
    };

//Get Any class ticket Input value
    function getTicketInput(ticketName){
        var ticketCountNumber = document.getElementById( ticketName + '-input');
        var totalCountNumber = parseInt(ticketCountNumber.value);
        return totalCountNumber;
    };

//Extra Work After Book Now
    var bookNow = document.getElementById('confirmation');
    bookNow.addEventListener('click', function(){
        var backHome = document.getElementById('booking');
        backHome.style.display = 'none';
        var thankYou = document.getElementById('thank-you');
        thankYou.style.display = 'block';
        
    });

    var showHome = document.getElementById('book-now');
    showHome.addEventListener('click', function(){
        var showTicket = document.getElementById('booking');
        showTicket.style.display = 'block';
        var thankYou = document.getElementById('thank-you');
        thankYou.style.display = 'none';

    })

// Firstclass Ticket Up and Down function code below
    // function firstUpDown(isTicketUp){
    //     var firstInput = document.getElementById('first-input');
    //     var firstCount = parseInt(firstInput.value);
    //     var firstNewNumber = firstCount;
    //     if(isTicketUp == false && firstCount > 0 ){
    //         firstNewNumber = firstCount - 1;
    //     }
    //     if(isTicketUp == true){
    //         firstNewNumber = firstCount + 1;
    //     }
    //     firstInput.value = firstNewNumber;
    //     var firstTotalDown = firstNewNumber * 150;
    //     console.log(firstTotalDown);
    // };

// //Economy Up and Down Function code below
    // function ticketUpDown(isTicketUp){
    //     var economyInput = document.getElementById('economy-input');
    //     var economyCount = parseInt(economyInput.value);
    //     var economyNewNumber = economyCount;
    //     if(isTicketUp == false && economyCount > 0  ){
    //         economyNewNumber = economyCount - 1;
    //     }
    //     if(isTicketUp == true){
    //         economyNewNumber = economyCount + 1;
    //     }
    //     economyInput.value = economyNewNumber;
    //     var totalEconomy = economyNewNumber * 100;
    //     console.log(totalEconomy);
    // };

// Firstclass Ticket Number Up details code below
    // var firstUp = document.getElementById('first-increase');
    // firstUp.addEventListener('click', function(){
    //     var firstInput = document.getElementById('first-input');
    //     var firstCount = parseInt(firstInput.value);
    //     var firstNewNumber = firstCount + 1;
    //     firstInput.value = firstNewNumber;
    //     var totalFirst = firstNewNumber * 150;
    //     console.log(totalFirst);
    // });

// Firstclass Ticket Number Down details code below
    // var firstDown = document.getElementById('first-decrease');
    // firstDown.addEventListener('click', function(){
    //     var firstInput = document.getElementById('first-input');
    //     var firstCount = parseInt(firstInput.value);
    //     var firstNewNumber = firstCount - 1;
    //     firstInput.value = firstNewNumber;
    //     var firstTotalDown = firstNewNumber * 150;
    //     console.log(firstTotalDown);
    // })


// Economy Ticket Number Up Details Code below
    // var economyUp = document.getElementById('economy-increase');
    // economyUp.addEventListener('click', function(){
    //     var economyInput = document.getElementById('economy-input');
    //     var economyCount = parseInt(economyInput.value);
    //     var economyNewNumber = economyCount + 1;
    //     economyInput.value = economyNewNumber;
    //     var totalEconomyUp = economyNewNumber * 100;
    //     //console.log(totalEconomyUp);
    // });

// Economy Ticket Number Down Details Code below
    // var economyDown = document.getElementById('economy-decrease');
    // economyDown.addEventListener('click', function(){
    //     var economyInput = document.getElementById('economy-input');
    //     var economyCount = parseInt(economyInput.value);
    //     var economyNewNumber = economyCount - 1;
    //     economyInput.value = economyNewNumber;
    //     var totalEconomyDown = economyNewNumber * 100;
    //     //console.log(totalEconomyDown);
    // 
//});