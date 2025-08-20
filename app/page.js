import Link from 'next/link';
import FilterBar from './components/FilterBar';
import JobCard from './components/JobCard';

async function getJobs() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/jobs`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

export default async function Home({ searchParams }) {
  const jobs = await getJobs();
  
  // Await searchParams for Next.js 15 compatibility
  const params = await searchParams;
  
  // Filter jobs based on search params
  const titleFilter = params.title?.toLowerCase() || '';
  const locationFilter = params.location?.toLowerCase() || '';
  
  const filteredJobs = jobs.filter(job => {
    const matchesTitle = !titleFilter || job.title.toLowerCase().includes(titleFilter);
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter);
    return matchesTitle && matchesLocation;
  });

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exciting opportunities and take the next step in your career with our curated job listings.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} of {jobs.length} jobs
            {titleFilter && ` matching "${params.title}"`}
            {locationFilter && ` in "${params.location}"`}
          </p>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or browse all available positions.
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              View All Jobs
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
