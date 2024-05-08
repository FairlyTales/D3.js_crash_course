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

const container = d3.select('div')
  .classed('container', true)
  .style('border', '1px solid black');

container
  .selectAll('.bar')
  .data(DATA)
  .enter()
  .append('div')
  .classed('bar', true)
  .style('width', '30px')
  .style('height', d => `${d.value * 4}px`);
