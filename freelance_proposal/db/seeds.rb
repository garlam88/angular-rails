require 'faker'

10.times do |proposal|
  Proposal.create!(
    customer: Faker::Company.name,
    portfolio_url: Faker::Internet.url,
    tools: 'Ruby on Rails, Angular 7, and Postgres',
    estimated_hours: (80 + Faker::Number.number(2).to_i),
    hourly_rate: 125,
    weeks_to_complete: Faker::Number.number(2).to_i,
    client_email: Faker::Internet.email )
end
