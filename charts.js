// Chart.js default configuration
Chart.defaults.font.family = "'Work Sans', sans-serif";
Chart.defaults.color = '#666';

// Color palette
const colors = {
    world: '#1a1a2e',
    africa: '#e94560',
    asia: '#0f3460',
    europe: '#16213e',
    northAmerica: '#533483',
    latinAmerica: '#2a9d8f',
    india: '#e94560',
    china: '#0f3460',
    male: '#0f3460',
    female: '#e94560'
};

// 1. World Population Chart (2024-2100)
const worldPopCtx = document.getElementById('worldPopulationChart').getContext('2d');
new Chart(worldPopCtx, {
    type: 'line',
    data: {
        labels: [2024, 2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100],
        datasets: [{
            label: 'World Population',
            data: [8045, 8540, 9187, 9687, 9981, 10184, 10285, 10330, 10346],
            borderColor: colors.world,
            backgroundColor: 'rgba(26, 26, 46, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return (context.parsed.y / 1000).toFixed(2) + ' Billion';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 8000,
                max: 10500,
                ticks: {
                    callback: function(value) {
                        return (value / 1000).toFixed(1) + 'B';
                    }
                },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 2. Fertility Rate Chart (Regional Convergence)
const fertilityCtx = document.getElementById('fertilityChart').getContext('2d');
new Chart(fertilityCtx, {
    type: 'line',
    data: {
        labels: [1950, 1970, 1990, 2010, 2023, 2040, 2060, 2080, 2100],
        datasets: [{
            label: 'Africa',
            data: [6.5, 6.7, 6.1, 5.0, 4.2, 3.1, 2.5, 2.2, 2.0],
            borderColor: colors.africa,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Asia',
            data: [5.8, 5.5, 3.3, 2.3, 2.0, 1.8, 1.75, 1.75, 1.75],
            borderColor: colors.asia,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Europe',
            data: [2.6, 2.3, 1.8, 1.6, 1.5, 1.6, 1.6, 1.6, 1.6],
            borderColor: colors.europe,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Northern America',
            data: [3.3, 2.5, 2.0, 2.0, 1.7, 1.8, 1.8, 1.8, 1.8],
            borderColor: colors.northAmerica,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Latin America',
            data: [5.8, 5.5, 3.2, 2.2, 1.9, 1.7, 1.7, 1.7, 1.7],
            borderColor: colors.latinAmerica,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 15, usePointStyle: true }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 7,
                title: { display: true, text: 'Births per Woman' },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 3. Fertility 2100 Bar Chart
const fertility2100Ctx = document.getElementById('fertility2100Chart').getContext('2d');
new Chart(fertility2100Ctx, {
    type: 'bar',
    data: {
        labels: ['Africa', 'Northern America', 'Asia', 'Latin America', 'Europe'],
        datasets: [{
            label: 'Fertility Rate (2100)',
            data: [2.0, 1.8, 1.75, 1.7, 1.6],
            backgroundColor: [
                colors.africa,
                colors.northAmerica,
                colors.asia,
                colors.latinAmerica,
                colors.europe
            ],
            borderRadius: 8,
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 2.5,
                title: { display: true, text: 'Births per Woman' },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 4. India vs China Population
const indiaChinaCtx = document.getElementById('indiaChinaChart').getContext('2d');
new Chart(indiaChinaCtx, {
    type: 'line',
    data: {
        labels: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2023, 2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100],
        datasets: [{
            label: 'India',
            data: [376, 450, 555, 698, 873, 1056, 1240, 1428, 1514, 1597, 1647, 1670, 1671, 1657, 1627, 1589],
            borderColor: colors.india,
            backgroundColor: 'transparent',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 5
        }, {
            label: 'China',
            data: [554, 667, 830, 998, 1177, 1290, 1368, 1425, 1425, 1400, 1313, 1200, 1081, 968, 866, 771],
            borderColor: colors.china,
            backgroundColor: 'transparent',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 15, usePointStyle: true }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y + ' Million';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                title: { display: true, text: 'Population (Millions)' },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 5. Gender Pie Chart
const genderPieCtx = document.getElementById('genderPieChart').getContext('2d');
new Chart(genderPieCtx, {
    type: 'doughnut',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            data: [50.4, 49.6],
            backgroundColor: [colors.male, colors.female],
            borderWidth: 0,
            hoverOffset: 15
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 20, font: { size: 14 }, usePointStyle: true }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        }
    }
});

// 6. Gender Ratio Chart
const genderRatioCtx = document.getElementById('genderRatioChart').getContext('2d');
new Chart(genderRatioCtx, {
    type: 'line',
    data: {
        labels: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2023],
        datasets: [{
            label: 'United States',
            data: [0.985, 0.975, 0.960, 0.965, 0.975, 0.980, 0.985, 0.985],
            borderColor: colors.northAmerica,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Asia',
            data: [1.015, 1.020, 1.025, 1.030, 1.040, 1.045, 1.050, 1.048],
            borderColor: colors.asia,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Europe',
            data: [0.930, 0.935, 0.930, 0.925, 0.920, 0.925, 0.930, 0.935],
            borderColor: colors.europe,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 15, usePointStyle: true }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 0.9,
                max: 1.1,
                title: { display: true, text: 'Male-to-Female Ratio' },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 7. Life Expectancy Chart
const lifeExpectancyCtx = document.getElementById('lifeExpectancyChart').getContext('2d');
new Chart(lifeExpectancyCtx, {
    type: 'line',
    data: {
        labels: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2023],
        datasets: [{
            label: 'Europe',
            data: [64, 68, 71, 73, 74, 76, 78, 79],
            borderColor: colors.europe,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Northern America',
            data: [68, 70, 71, 74, 75, 77, 78, 78],
            borderColor: colors.northAmerica,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Asia',
            data: [42, 46, 57, 62, 65, 68, 71, 74],
            borderColor: colors.asia,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Latin America',
            data: [51, 56, 61, 66, 69, 72, 74, 75],
            borderColor: colors.latinAmerica,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Africa',
            data: [38, 41, 46, 50, 52, 53, 59, 63],
            borderColor: colors.africa,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 15, usePointStyle: true }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 35,
                max: 85,
                title: { display: true, text: 'Years' },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 8. Conflict Impact on Life Expectancy at 65
const conflictImpactCtx = document.getElementById('conflictImpactChart').getContext('2d');
new Chart(conflictImpactCtx, {
    type: 'line',
    data: {
        labels: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2024],
        datasets: [{
            label: 'Afghanistan',
            data: [8.5, 9.0, 9.2, 8.5, 7.2, 8.0, 9.5, 10.5],
            borderColor: colors.africa,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Iran',
            data: [11.0, 12.0, 13.5, 13.5, 13.0, 14.5, 16.0, 17.5],
            borderColor: colors.asia,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }, {
            label: 'Vietnam',
            data: [10.0, 10.5, 11.0, 12.5, 14.0, 15.5, 16.5, 17.8],
            borderColor: colors.latinAmerica,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 15, usePointStyle: true }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 6,
                max: 20,
                title: { display: true, text: 'Life Expectancy at Age 65 (Years)' },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 9. Death Rate Projection
const deathRateCtx = document.getElementById('deathRateChart').getContext('2d');
new Chart(deathRateCtx, {
    type: 'line',
    data: {
        labels: [2024, 2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100],
        datasets: [{
            label: 'World Death Rate',
            data: [8.1, 8.4, 9.0, 9.8, 10.5, 11.0, 11.4, 11.7, 11.9],
            borderColor: colors.world,
            backgroundColor: 'rgba(26, 26, 46, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 7,
                max: 13,
                title: { display: true, text: 'Deaths per 1,000 People' },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 10. Death Rate 2023 by Continent
const deathRate2023Ctx = document.getElementById('deathRate2023Chart').getContext('2d');
new Chart(deathRate2023Ctx, {
    type: 'bar',
    data: {
        labels: ['Europe', 'Northern America', 'Asia', 'Latin America', 'Africa'],
        datasets: [{
            label: 'Death Rate (2023)',
            data: [11.2, 8.5, 7.8, 7.2, 8.0],
            backgroundColor: [
                colors.europe,
                colors.northAmerica,
                colors.asia,
                colors.latinAmerica,
                colors.africa
            ],
            borderRadius: 8,
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 14,
                title: { display: true, text: 'Deaths per 1,000 People' },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 11. Ukraine Migration
const ukraineMigrationCtx = document.getElementById('ukraineMigrationChart').getContext('2d');
new Chart(ukraineMigrationCtx, {
    type: 'line',
    data: {
        labels: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2015, 2020, 2022, 2023],
        datasets: [{
            label: 'Net Migration (Thousands)',
            data: [0, -50, -30, -20, -100, -200, -150, -300, -200, -3500, -4000],
            borderColor: colors.world,
            backgroundColor: 'rgba(26, 26, 46, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const value = context.parsed.y;
                        if (value <= -1000) {
                            return (value / 1000).toFixed(1) + ' Million';
                        }
                        return value.toLocaleString() + ' People';
                    }
                }
            }
        },
        scales: {
            y: {
                title: { display: true, text: 'Net Migration' },
                grid: { color: 'rgba(0,0,0,0.05)' },
                ticks: {
                    callback: function(value) {
                        if (value <= -1000) {
                            return (value / 1000) + 'M';
                        }
                        return value;
                    }
                }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});
