const data = [
    {   Monday: 'High', amount: 100 },
    {   Tueday: 'High', amount: 90 },
    {   Wednesday: 'Moderate', amount: 50 },
    {   Thursday: 'Moderate', amount: 60 },
    {   Friday: 'Moderate', amount: 10 },
    {   Saturday: 'Low', amount: 20 },
    {   Sunday: 'Low', amount: 25 }
];

const width = 500;
const height= 800;
const margin= {top: 50, bottom: 50, left:50, right: 50}

const svg = d3.select('#d3-container')
.append('svg')
.attr('height', height - margin.top - margin.bottom)
.attr('width', width-margin.left - margin.right )
.attr('vieBox', [0, 0, width, height])

const x = d3.scaleBand()
.domain(d3.range(data.length))
.range(margin.left, width - margin.right)
.padding(0.1);

const y = d3.scalelinear()
.domain([0,100])
.range([height- margin.bottom, margin.top]);

svg
.append ('g')
.attr('fill', 'pink')
.selectAll('rect')
.data(data.sort((a, b)=> d3.descending(a.amount, b.amount)))
.join('rect')
.attr('x', (d, i) => x(i))
.attr('y', (d) => y(d.amount))
.attr('height', d => y(0) - y(d.amount))
.attr('width', x.bandwidth())


svg.node();


