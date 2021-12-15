const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

    for (let i = 0; i < alumns.length; i++) {
        alumn = alumns[i];
         
        let count=0;
        let count = alumn.T1 ? count +1 : count;
        let count = alumn.T2 ? count +1 : count;
        let count = alumn.T3 ? count +1 : count;

        isApproved = count<=2 ? true : false;

    
        
    }

    console.log (alumns)