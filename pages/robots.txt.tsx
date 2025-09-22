// Simple robots.txt for static export
const Robots = () => {
  return null
}

export async function getStaticProps() {
  return {
    notFound: true
  }
}

export default Robots
