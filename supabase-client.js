// supabase-client.js
const { createClient } = supabase;
const supa = createClient(
  'https://uupzrnmmsqnogbqivstj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cHpybm1tc3Fub2dicWl2c3RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNjAyNzksImV4cCI6MjA2MzYzNjI3OX0.1bTJ9FGNZ8ou20gngHfhE_r7sI23AfYh0jtWyQFqSiI'
);

function formatRupiah(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

async function getProducts() {
  const { data, error } = await supa.from('products').select('*');
  if (error) {
    alert('Gagal mengambil data produk: ' + error.message);
    return [];
  }
  return data;
}