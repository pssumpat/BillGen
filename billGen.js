 // JavaScript code goes here

        // Sample products object
        const products = [
            { id:1, name: 'Product 1', rate: 1050 },
            { id:2, name: 'Product 2', rate: 15 },
            { id:3, name: 'Product 3', rate: 2000 },
            { id:4, name: 'Product 1', rate: 10 },
            { id:5, name: 'Product 2', rate: 1500 },
            { id:6, name: 'Product 3', rate: 20 }
            // Add more products as needed
        ];

        let bill;

        function getRandomQuantity(temp) {
            if(temp>1000)
            {
              const randomNumber = Math.random();
             return randomNumber >= 0.5 ? 2 : 1;
            }
            else if(temp<=1000 && temp>=500)
            {
                 // Generate a random quantity between 1 and 10
            return Math.floor(Math.random() * 10) + 1;
            }
            else
            {
                 // Generate a random quantity between 1 and 10
            return Math.floor(Math.random() * 20) + 1;
            }
           
        }

        function getRandomProduct() 
        { 
            const productSize = 6;
            return Math.floor(Math.random() * productSize) + 1;
        }

        function getProductById(id) 
        {
            return products.find(product => product.id === id);
        }

        function generateBill() {
            const amount = parseFloat(document.getElementById('amount').value);
            if (isNaN(amount)) {
                alert('Please enter a valid amount.');
                return;
            }

            const table = document.getElementById('bill-table');
            table.innerHTML = '<tr><th>#</th><th>Product Name</th><th>Rate</th><th>Quantity</th><th>Total</th></tr>';
            let amountLeft = amount;
            let total = 0;
            let i=1;
           while(amountLeft>0) {
                if(amountLeft<50)
                {
                    const row = table.insertRow(-1);
                    row.innerHTML = `
                    <td>${i}</td>
                    <td>${'Packaging'}</td>
                    <td>${amountLeft}</td>
                    <td>${1}</td>
                    <td>${amountLeft}</td>
                `;
                    break;
                }
                let product = getProductById(getRandomProduct());
                const quantity = getRandomQuantity(product.rate);
                const productTotal = quantity * product.rate;
                
                if(productTotal<amountLeft)
                {
                    amountLeft -= productTotal;
                    const row = table.insertRow(-1);
                    row.innerHTML = `
                    <td>${i}</td>
                    <td>${product.name}</td>
                    <td>${product.rate}</td>
                    <td>${quantity}</td>
                    <td>${productTotal}</td>
                `;
                i++;
                }
                

            }
            
            

            const totalRow = table.insertRow(-1);
            totalRow.innerHTML = `<td colspan="4"><em><strong>Total</strong></em></td><td>${amount}</td>`;

        }

        function deleteProduct(button) {
            const row = button.parentNode.parentNode;
            const productTotal = parseFloat(row.cells[3].innerText);
            const totalElement = document.getElementById('total');
            const total = parseFloat(totalElement.innerText.replace('Total: ', ''));
            totalElement.innerText = `Total: ${(total - productTotal).toFixed(2)}`;
            row.remove();
        }

        function showProducts() {
            const table = document.getElementById('product-table');
            table.innerHTML = '<tr><th>#</th><th>Product Name</th><th>Rate</th></tr>';
            let i=1;
            for (const product of products) {
                const row = table.insertRow(-1);
                row.innerHTML = `
                    <td>${i}</td>
                    <td>${product.name}</td>
                    <td>${product.rate}</td>
                `;
                i++;
            }
        }