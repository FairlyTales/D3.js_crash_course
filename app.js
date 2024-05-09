const DATA = [
  {
    id: 'id1',
    value: 10,
    region: 'USA',
  },
  {
    id: 'id2',
    value: 20,
    region: 'India',
  },
  {
    id: 'id3',
    value: 30,
    region: 'China',
  },
  {
    id: 'id4',
    value: 40,
    region: 'Germany',
  },
];

const xScale = d3.scaleBand().domain(DATA.map((dataPoint) => dataPoint.region)).rangeRound([0, 250]).padding(0.1);
const yScale = d3.scaleLinear().domain([0, 50]).range([200, 0]);

const container = d3.select('svg').classed('container', true);

container
  .selectAll('.bar')
  .data(DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', (data) => 200 - yScale(data.value))
  .attr('x', (data) => xScale(data.region))
  .attr('y', (data) => yScale(data.value));
