10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: 'http://google.com',
    tools: 'Ruby on Rail, Angular 2, and Postgres',
    estimated_hours: (80 + proposal),
    hourly_rate: 125,
    weeks_to_complete: 12,
    client_email: 'garlam@yahoo.com',  )
end
