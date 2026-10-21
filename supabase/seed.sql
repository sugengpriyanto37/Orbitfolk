insert into public.destinations (slug, city, country, month, dates, badge, image_url, blurb, intro)
values
  ('lisbon', 'Lisbon', 'Portugal', 'January', '08 → 02', 'Lisbon light', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/d59a0884d_generated_image.png', 'Cobblestones, Atlantic air and a city that makes remote work feel easy.', 'A month of tiled streets, small cafes and easy days by the Atlantic.'),
  ('chiang-mai', 'Chiang Mai', 'Thailand', 'February', '05 → 02', 'Chiang Mai slow', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/710308e25_generated_image.png', 'Mountain mornings, night markets and deep focus.', 'A calm base for focused work, warm evenings and a gentle pace.'),
  ('tokyo', 'Tokyo', 'Japan', 'April', '04 → 28', 'Tokyo in motion', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/3b1fec64d_generated_image.png', 'Precision, ramen and quiet backstreets made for deep work.', 'The world’s most reliable city: trains, ramen and quiet streets made for deep work.')
on conflict (slug) do update set
  city = excluded.city, country = excluded.country, month = excluded.month, dates = excluded.dates,
  badge = excluded.badge, image_url = excluded.image_url, blurb = excluded.blurb, intro = excluded.intro;

insert into public.destinations (slug, city, country, month, dates, badge, image_url, blurb, intro)
values
  ('barcelona', 'Barcelona', 'Spain', 'February', '05 → 01', 'Barcelona rhythm', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/a7b8921da_generated_image.png', 'Beach mornings, tapas nights and modernista streets between work sprints.', ''),
  ('da-nang', 'Da Nang', 'Vietnam', 'February', '08 → 04', 'Da Nang calm', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/f55140aae_generated_image.png', 'Calm beaches, mountain passes and the quiet side of Vietnam.', ''),
  ('medellin', 'Medellín', 'Colombia', 'February', '11 → 07', 'Medellín spring', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/8d14f6e2e_generated_image.png', 'Eternal spring, green mountains and a city that moves with the music.', ''),
  ('marrakech', 'Marrakech', 'Morocco', 'March', '05 → 29', 'Marrakech in gold', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/51011382f_generated_image.png', 'Riads, souks and desert light, a short walk from the medina.', ''),
  ('canggu', 'Canggu', 'Indonesia', 'March', '08 → 01', 'Canggu by the break', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/d61b30707_generated_image.png', 'Surf breaks, rice fields and slow island mornings in Bali.', ''),
  ('cape-town', 'Cape Town', 'South Africa', 'March', '11 → 05', 'Cape Town edges', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/066691bbe_generated_image.png', 'Two oceans, one mountain and the best commute views on earth.', ''),
  ('buenos-aires', 'Buenos Aires', 'Argentina', 'April', '07 → 01', 'Buenos Aires nights', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/29bba904b_generated_image.png', 'Steak, tango and grand boulevards with late-night energy.', ''),
  ('split', 'Split', 'Croatia', 'April', '10 → 04', 'Split by the Adriatic', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/991d125cc_generated_image.png', 'Roman walls, Adriatic swims and island ferries every weekend.', ''),
  ('lisbon', 'Lisbon', 'Portugal', 'January', '05 → 29', 'Lisbon by sea', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/d59a0884d_generated_image.png', 'Arrive in Lisbon by the sea. Coffee mornings, tiled alleys and slow sunsets by the water.', ''),
  ('chiang-mai', 'Chiang Mai', 'Thailand', 'January', '09 → 02', 'Chiang Mai in focus', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/710308e25_generated_image.png', 'Temples, mountains and night markets. The classic nomad base, done properly.', ''),
  ('mexico-city', 'Mexico City', 'Mexico', 'January', '11 → 05', 'Mexico City in heat', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/8b75ee572_generated_image.png', 'Big-city energy, legendary food and the best coffee in the Americas.', ''),
  ('tokyo', 'Tokyo', 'Japan', 'April', '04 → 28', 'Tokyo in motion', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/3b1fec64d_generated_image.png', 'Precision, ramen and quiet backstreets made for deep work.', '')
on conflict (slug) do update set
  city = excluded.city, country = excluded.country, month = excluded.month, dates = excluded.dates,
  badge = excluded.badge, image_url = excluded.image_url, blurb = excluded.blurb;

insert into public.trip_plans (destination_id, name, price_cents, features)
select d.id, p.name, p.price_cents, p.features::jsonb
from public.destinations d
cross join (values
  ('The Room', 115000, '["Private room in a shared apartment", "Weekly cleaning and linen service", "24/7 coworking access"]'),
  ('The Suite', 200000, '["Private suite with extra space", "Weekly cleaning and linen service", "24/7 coworking access", "Welcome dinner"]')
) as p(name, price_cents, features)
where d.slug in ('lisbon', 'chiang-mai', 'tokyo')
on conflict (destination_id, name) do update set
  price_cents = excluded.price_cents, features = excluded.features;

insert into public.trip_plans (destination_id, name, price_cents, features)
select d.id, p.name, p.price_cents, p.features::jsonb
from public.destinations d
cross join (values
  ('The Room', 145000, '["Private room in a shared Orbitfolk apartment", "Weekly cleaning and linen service", "24/7 coworking access", "Weekly community dinners and events"]'),
  ('The Suite', 240000, '["Private suite with your own kitchen", "Weekly cleaning and linen service", "24/7 coworking access", "Airport transfer and welcome dinner", "Weekly community dinners and events"]')
) as p(name, price_cents, features)
where d.slug = 'lisbon'
on conflict (destination_id, name) do update set price_cents = excluded.price_cents, features = excluded.features;

insert into public.trip_plans (destination_id, name, price_cents, features)
select d.id, p.name, p.price_cents, p.features::jsonb
from public.destinations d
cross join (values
  ('The Room', 98000, '["Private room in a shared Orbitfolk apartment", "Weekly cleaning and linen service", "24/7 coworking access", "Weekly community dinners and events"]'),
  ('The Suite', 175000, '["Private suite with your own kitchen", "Weekly cleaning and linen service", "24/7 coworking access", "Airport transfer and welcome dinner", "Weekly community dinners and events"]')
) as p(name, price_cents, features)
where d.slug = 'chiang-mai'
on conflict (destination_id, name) do update set price_cents = excluded.price_cents, features = excluded.features;

insert into public.trip_plans (destination_id, name, price_cents, features)
select d.id, p.name, p.price_cents, f.features::jsonb
from public.destinations d
join (values
  ('tokyo', 'The Room', 170000), ('tokyo', 'The Suite', 280000),
  ('mexico-city', 'The Room', 119000), ('mexico-city', 'The Suite', 205000),
  ('barcelona', 'The Room', 165000), ('barcelona', 'The Suite', 270000),
  ('da-nang', 'The Room', 94000), ('da-nang', 'The Suite', 168000),
  ('medellin', 'The Room', 105000), ('medellin', 'The Suite', 185000),
  ('marrakech', 'The Room', 110000), ('marrakech', 'The Suite', 190000),
  ('canggu', 'The Room', 115000), ('canggu', 'The Suite', 200000),
  ('cape-town', 'The Room', 125000), ('cape-town', 'The Suite', 215000),
  ('buenos-aires', 'The Room', 102000), ('buenos-aires', 'The Suite', 180000),
  ('split', 'The Room', 130000), ('split', 'The Suite', 220000)
) as p(slug, name, price_cents) on p.slug = d.slug
cross join lateral (select '["Private room or suite", "Weekly cleaning and linen service", "24/7 coworking access", "Weekly community dinners and events"]'::text as features) f
on conflict (destination_id, name) do update set price_cents = excluded.price_cents, features = excluded.features;
