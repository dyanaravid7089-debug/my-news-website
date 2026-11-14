// ===== Supabase 配置区 =====
const SUPABASE_URL = "https://ususaivrnmyajfgmvlqb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_sBT90gdTIRXYJ-Slhb9WHw_IINyc1u";

// ============================

// 初始化 Supabase
if (window.supabase) {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log("✅ Supabase 连接成功！");
} else {
  console.log("⚠️ 请先在HTML文件头部引入 Supabase 库");
}
