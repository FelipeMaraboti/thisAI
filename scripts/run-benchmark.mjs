import { runBenchmarkSuite } from './benchmark.ts';

runBenchmarkSuite()
  .then((metrics) => {
    console.log('Benchmark execution successfully completed.');
  })
  .catch((err) => {
    console.error('Benchmark execution error:', err);
  });
