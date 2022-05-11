let myChart;
const hookGrafica = (id, man, women) => {   
  const ctx = document.getElementById(id);     
    if(myChart){
        myChart.destroy();
    } 
    myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Mujeres", "Varones"],
        datasets: [
          {
            label: "My First Dataset",
            data: [women, man],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
              labels: {
                  font: {
                      size: 18
                  }
              }
          }
      }
      },
    });  
  console.log(myChart); 
};

export default hookGrafica;
