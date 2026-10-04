import { useState } from "react";

const COLORS = {
  bg: "#0B0F1A",
  sidebar: "#0F1525",
  card: "#141929",
  cardBorder: "#1E2840",
  accent: "#3B82F6",
  accentGlow: "rgba(59,130,246,0.15)",
  green: "#10B981",
  red: "#EF4444",
  yellow: "#F59E0B",
  purple: "#8B5CF6",
  text: "#E2E8F0",
  muted: "#64748B",
  heading: "#F8FAFC",
};

const navItems = [
  { id: "dashboard", icon: "◈", label: "Dashboard" },
  { id: "buildings", icon: "🏛", label: "Bâtiments" },
  { id: "rooms", icon: "🚪", label: "Salles" },
  { id: "schedules", icon: "📅", label: "Emplois du Temps" },
  { id: "announcements", icon: "📢", label: "Annonces" },
  { id: "students", icon: "👥", label: "Étudiants" },
  { id: "notifications", icon: "🔔", label: "Notifications Push" },
];

// ── DASHBOARD ──────────────────────────────────────────────
const DashboardScreen = () => (
  <div>
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontSize: 24, fontWeight: 800, color: COLORS.heading, letterSpacing: -0.5 }}>Vue d'ensemble</div>
      <div style={{ fontSize: 13, color: COLORS.muted, marginTop: 3 }}>Mardi 03 Mars 2026 · Campus ENSIASD Taroudant</div>
    </div>

    {/* KPI Cards */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 28 }}>
      {[
        { label: "Salles totales", value: "42", sub: "+3 ce mois", color: COLORS.accent, icon: "🚪" },
        { label: "Étudiants actifs", value: "318", sub: "IL + SDBDIA", color: COLORS.green, icon: "👥" },
        { label: "Annonces publiées", value: "12", sub: "Ce semestre", color: COLORS.yellow, icon: "📢" },
        { label: "Cours aujourd'hui", value: "24", sub: "8 salles utilisées", color: COLORS.purple, icon: "📅" },
      ].map((k, i) => (
        <div key={i} style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, padding: "20px 22px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, fontSize: 64, opacity: 0.06 }}>{k.icon}</div>
          <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{k.label}</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: k.color, lineHeight: 1 }}>{k.value}</div>
          <div style={{ fontSize: 11, color: COLORS.muted, marginTop: 6 }}>{k.sub}</div>
        </div>
      ))}
    </div>

    {/* Charts row */}
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 24 }}>
      {/* Occupation timeline */}
      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, padding: 22 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.heading, marginBottom: 18 }}>Occupation des salles – Aujourd'hui</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { room: "B204", slots: [0,0,1,1,0,1,1,0], color: COLORS.accent },
            { room: "A101", slots: [1,1,0,0,1,0,0,1], color: COLORS.green },
            { room: "Amphi 1", slots: [0,1,1,1,0,0,1,0], color: COLORS.purple },
            { room: "Labo Info", slots: [1,0,0,1,1,0,0,0], color: COLORS.yellow },
          ].map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 70, fontSize: 11, color: COLORS.muted, fontWeight: 600 }}>{r.room}</div>
              <div style={{ display: "flex", gap: 3, flex: 1 }}>
                {["8h","9h","10h","11h","14h","15h","16h","17h"].map((h, j) => (
                  <div key={j} style={{ flex: 1, height: 22, borderRadius: 4, background: r.slots[j] ? r.color : "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {j === 0 && <span style={{ fontSize: 8, color: r.slots[j] ? "white" : COLORS.muted }}>{h}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ display: "flex", gap: 3, marginLeft: 80 }}>
            {["8h","9h","10h","11h","14h","15h","16h","17h"].map((h,j) => (
              <div key={j} style={{ flex: 1, fontSize: 9, color: COLORS.muted, textAlign: "center" }}>{h}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Distribution filière */}
      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, padding: 22 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.heading, marginBottom: 18 }}>Répartition Étudiants</div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div style={{ width: 100, height: 100, borderRadius: "50%", background: `conic-gradient(${COLORS.accent} 0deg 194deg, ${COLORS.green} 194deg 360deg)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: COLORS.card, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: COLORS.heading }}>318</div>
              <div style={{ fontSize: 8, color: COLORS.muted }}>total</div>
            </div>
          </div>
        </div>
        {[["IL – Ingénierie Logicielle", "172", COLORS.accent], ["SDBDIA", "146", COLORS.green]].map(([label, val, color], i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
              <div style={{ fontSize: 12, color: COLORS.muted }}>{label}</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color }}>{val}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Recent activity */}
    <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, padding: 22 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.heading, marginBottom: 16 }}>Activité Récente</div>
      {[
        { action: "Salle B204 modifiée", detail: "Capacité mise à jour : 28 → 30 places", time: "Il y a 10 min", type: "edit", color: COLORS.accent },
        { action: "Annonce publiée", detail: "Changement salle TD Réseaux", time: "Il y a 1h", type: "announce", color: COLORS.yellow },
        { action: "Emploi du temps – IL", detail: "Semaine 10 mise à jour", time: "Il y a 2h", type: "schedule", color: COLORS.green },
        { action: "Nouvel étudiant inscrit", detail: "Benchaoui Hamza – IL S8", time: "Hier", type: "student", color: COLORS.purple },
      ].map((a, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0", borderBottom: i < 3 ? `1px solid ${COLORS.cardBorder}` : "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: a.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
            {["✏️","📢","📅","👤"][i]}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{a.action}</div>
            <div style={{ fontSize: 11, color: COLORS.muted }}>{a.detail}</div>
          </div>
          <div style={{ fontSize: 11, color: COLORS.muted }}>{a.time}</div>
        </div>
      ))}
    </div>
  </div>
);

// ── BUILDINGS ──────────────────────────────────────────────
const BuildingsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.heading }}>Gestion des Bâtiments</div>
          <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>4 bâtiments enregistrés</div>
        </div>
        <button onClick={() => setShowModal(true)} style={{ background: COLORS.accent, border: "none", borderRadius: 10, padding: "10px 20px", color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          + Ajouter un bâtiment
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
        {[
          { name: "Bâtiment A", rooms: 12, desc: "Salles TD & CM", color: COLORS.accent },
          { name: "Bâtiment B", rooms: 10, desc: "Salles TP Informatique", color: COLORS.green },
          { name: "Amphithéâtres", rooms: 3, desc: "Amphi 1, 2, 3", color: COLORS.purple },
          { name: "Laboratoires", rooms: 5, desc: "Labos spécialisés", color: COLORS.yellow },
        ].map((b, i) => (
          <div key={i} style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, padding: 22, position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: b.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏛</div>
              <div style={{ display: "flex", gap: 6 }}>
                <button style={{ background: "rgba(59,130,246,0.15)", border: "none", borderRadius: 8, padding: "5px 10px", color: COLORS.accent, fontSize: 11, cursor: "pointer" }}>✏️ Modifier</button>
                <button style={{ background: "rgba(239,68,68,0.15)", border: "none", borderRadius: 8, padding: "5px 10px", color: COLORS.red, fontSize: 11, cursor: "pointer" }}>🗑️</button>
              </div>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.heading }}>{b.name}</div>
            <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 4 }}>{b.desc}</div>
            <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: b.color }}>{b.rooms}</div>
              <div style={{ fontSize: 11, color: COLORS.muted }}>salles enregistrées</div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: COLORS.sidebar, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 20, padding: 28, width: 400 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.heading, marginBottom: 20 }}>Nouveau Bâtiment</div>
            {["Nom du bâtiment", "Description"].map((p, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 600, marginBottom: 6 }}>{p}</div>
                <div style={{ background: COLORS.bg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 10, padding: "11px 14px", fontSize: 13, color: COLORS.muted }}>Entrez le {p.toLowerCase()}...</div>
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "none", borderRadius: 10, padding: 12, color: COLORS.muted, cursor: "pointer", fontSize: 13 }}>Annuler</button>
              <button style={{ flex: 1, background: COLORS.accent, border: "none", borderRadius: 10, padding: 12, color: "white", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Créer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── ROOMS ──────────────────────────────────────────────────
const RoomsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const rooms = [
    { name: "B204", building: "Bât. B", floor: "2e", type: "TP", cap: 30, equip: "PCs, Projecteur, Wi-Fi", status: "Libre" },
    { name: "A101", building: "Bât. A", floor: "1er", type: "TD", cap: 40, equip: "Tableau, Projecteur", status: "Occupée" },
    { name: "Amphi 1", building: "Amphithéâtres", floor: "RDC", type: "CM", cap: 150, equip: "Micro, Projecteur", status: "Libre" },
    { name: "Labo Info", building: "Labos", floor: "1er", type: "Labo", cap: 25, equip: "PCs, Imprimante", status: "Réservée" },
    { name: "A203", building: "Bât. A", floor: "2e", type: "TD", cap: 35, equip: "Tableau", status: "Libre" },
  ];
  const statusColor = { Libre: COLORS.green, Occupée: COLORS.red, Réservée: COLORS.yellow };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.heading }}>Gestion des Salles</div>
          <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>{rooms.length} salles enregistrées</div>
        </div>
        <button onClick={() => setShowModal(true)} style={{ background: COLORS.accent, border: "none", borderRadius: 10, padding: "10px 20px", color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
          + Ajouter une salle
        </button>
      </div>

      {/* Filter bar */}
      <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
        {["Tous","Bât. A","Bât. B","Labos","Amphithéâtres"].map((f, i) => (
          <div key={i} style={{ background: i===0 ? COLORS.accent : "rgba(255,255,255,0.06)", borderRadius: 8, padding: "6px 14px", fontSize: 12, color: i===0 ? "white" : COLORS.muted, cursor: "pointer", fontWeight: i===0 ? 600 : 400 }}>{f}</div>
        ))}
        <div style={{ marginLeft: "auto", background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 8, padding: "6px 14px", fontSize: 12, color: COLORS.muted, display: "flex", gap: 6 }}>🔍 Rechercher...</div>
      </div>

      {/* Table */}
      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr .6fr .7fr .5fr 1.5fr 1fr .8fr", padding: "12px 20px", borderBottom: `1px solid ${COLORS.cardBorder}`, fontSize: 11, color: COLORS.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8 }}>
          {["Salle","Bâtiment","Étage","Type","Cap.","Équipements","Statut","Actions"].map(h => <div key={h}>{h}</div>)}
        </div>
        {rooms.map((r, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr .6fr .7fr .5fr 1.5fr 1fr .8fr", padding: "14px 20px", borderBottom: i < rooms.length-1 ? `1px solid ${COLORS.cardBorder}` : "none", alignItems: "center", fontSize: 12 }}>
            <div style={{ fontWeight: 700, color: COLORS.heading }}>{r.name}</div>
            <div style={{ color: COLORS.muted }}>{r.building}</div>
            <div style={{ color: COLORS.muted }}>{r.floor}</div>
            <div><span style={{ background: COLORS.accent + "22", color: COLORS.accent, borderRadius: 6, padding: "3px 8px", fontSize: 10, fontWeight: 600 }}>{r.type}</span></div>
            <div style={{ color: COLORS.text }}>{r.cap}</div>
            <div style={{ color: COLORS.muted, fontSize: 11 }}>{r.equip}</div>
            <div><span style={{ background: statusColor[r.status as keyof typeof statusColor] + "22", color: statusColor[r.status as keyof typeof statusColor], borderRadius: 6, padding: "3px 8px", fontSize: 10, fontWeight: 600 }}>{r.status}</span></div>
            <div style={{ display: "flex", gap: 6 }}>
              <button style={{ background: "rgba(59,130,246,0.15)", border: "none", borderRadius: 6, padding: "5px 8px", color: COLORS.accent, fontSize: 11, cursor: "pointer" }}>✏️</button>
              <button style={{ background: "rgba(239,68,68,0.15)", border: "none", borderRadius: 6, padding: "5px 8px", color: COLORS.red, fontSize: 11, cursor: "pointer" }}>🗑️</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: COLORS.sidebar, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 20, padding: 28, width: 460 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.heading, marginBottom: 20 }}>Nouvelle Salle</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {["Nom de la salle","Bâtiment","Étage","Type","Capacité","Équipements (séparés par virgule)"].map((p, i) => (
                <div key={i} style={{ gridColumn: i === 5 ? "1 / -1" : "auto" }}>
                  <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 600, marginBottom: 5 }}>{p}</div>
                  <div style={{ background: COLORS.bg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 8, padding: "9px 12px", fontSize: 12, color: COLORS.muted }}>...</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "none", borderRadius: 10, padding: 12, color: COLORS.muted, cursor: "pointer", fontSize: 13 }}>Annuler</button>
              <button style={{ flex: 1, background: COLORS.accent, border: "none", borderRadius: 10, padding: 12, color: "white", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Créer la salle</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── SCHEDULES ──────────────────────────────────────────────
const SchedulesScreen = () => {
  const [filiere, setFiliere] = useState("IL");
  const days = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi"];
  const slots = [
    { time: "08:00–10:00", courses: { IL: ["Algorithmique Avancée\nA101","","Réseaux\nB204","","GL\nAmphi 1"], SDBDIA: ["ML Avancé\nLabo","","Statistics\nA203","","",""] } },
    { time: "10:00–12:00", courses: { IL: ["","Dev Mobile\nB204","","BDD\nLabo",""], SDBDIA: ["","Deep Learning\nLabo","","Cloud\nB204",""] } },
    { time: "14:00–16:00", courses: { IL: ["BDD\nLabo","","Génie Log.\nAmphi 1","",""], SDBDIA: ["","","Big Data\nLabo","","ML\nLabo"] } },
    { time: "16:00–18:00", courses: { IL: ["","Sécurité\nA203","","","Dev Web\nB204"], SDBDIA: ["Python\nB204","","","BI\nA101",""] } },
  ];
  const cellColors = [COLORS.accent, COLORS.green, COLORS.purple, COLORS.yellow];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.heading }}>Gestion des Emplois du Temps</div>
          <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>Semaine 10 – Mars 2026</div>
        </div>
        <button style={{ background: COLORS.accent, border: "none", borderRadius: 10, padding: "10px 20px", color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>+ Ajouter un cours</button>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        {["IL","SDBDIA"].map(f => (
          <button key={f} onClick={() => setFiliere(f)} style={{ background: filiere === f ? COLORS.accent : "rgba(255,255,255,0.06)", border: "none", borderRadius: 8, padding: "8px 20px", color: filiere === f ? "white" : COLORS.muted, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{f}</button>
        ))}
      </div>

      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, overflow: "hidden" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "90px repeat(5,1fr)", borderBottom: `1px solid ${COLORS.cardBorder}` }}>
          <div style={{ padding: "10px 14px", fontSize: 11, color: COLORS.muted }} />
          {days.map(d => <div key={d} style={{ padding: "12px 10px", fontSize: 12, fontWeight: 700, color: COLORS.heading, textAlign: "center", borderLeft: `1px solid ${COLORS.cardBorder}` }}>{d}</div>)}
        </div>
        {slots.map((slot, si) => (
          <div key={si} style={{ display: "grid", gridTemplateColumns: "90px repeat(5,1fr)", borderBottom: si < slots.length-1 ? `1px solid ${COLORS.cardBorder}` : "none", minHeight: 70 }}>
            <div style={{ padding: "14px 10px", fontSize: 11, color: COLORS.muted, fontWeight: 600, display: "flex", alignItems: "center" }}>{slot.time}</div>
            {days.map((_d, di) => {
              const val = slot.courses[filiere as keyof typeof slot.courses][di];
              return (
                <div key={di} style={{ borderLeft: `1px solid ${COLORS.cardBorder}`, padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {val ? (
                    <div style={{ background: cellColors[si] + "22", border: `1px solid ${cellColors[si]}44`, borderRadius: 8, padding: "6px 10px", width: "100%", cursor: "pointer" }}>
                      {val.split("\n").map((line: string, li: number) => (
                        <div key={li} style={{ fontSize: li === 0 ? 11 : 10, color: li === 0 ? COLORS.text : COLORS.muted, fontWeight: li === 0 ? 600 : 400 }}>{line}</div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ width: "100%", height: 40, border: `1px dashed ${COLORS.cardBorder}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: 0 }}>+</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── ANNOUNCEMENTS ──────────────────────────────────────────
const AnnouncementsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const announcements = [
    { title: "Changement salle – TD Réseaux", body: "Déplacé de B204 → A101 jeudi 05/03", date: "02 Mar 2026", tag: "Urgent", color: COLORS.red, notif: true },
    { title: "Examen rattrapage – BDD", body: "Vendredi 07/03 à 9h00 – Amphi 1", date: "28 Fév 2026", tag: "Examen", color: COLORS.yellow, notif: true },
    { title: "Conférence IA – Amphi 1", body: "Organisée par le club tech, 10 Mar", date: "25 Fév 2026", tag: "Événement", color: COLORS.green, notif: false },
    { title: "Fermeture bibliothèque", body: "Fermée du 08 au 10 Mars pour travaux", date: "24 Fév 2026", tag: "Info", color: COLORS.accent, notif: false },
  ];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.heading }}>Gestion des Annonces</div>
          <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>{announcements.length} annonces publiées ce semestre</div>
        </div>
        <button onClick={() => setShowModal(true)} style={{ background: COLORS.accent, border: "none", borderRadius: 10, padding: "10px 20px", color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>+ Nouvelle annonce</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {announcements.map((a, i) => (
          <div key={i} style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: a.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📢</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ background: a.color + "22", color: a.color, borderRadius: 6, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{a.tag}</span>
                {a.notif && <span style={{ background: "rgba(59,130,246,0.15)", color: COLORS.accent, borderRadius: 6, padding: "2px 8px", fontSize: 10 }}>🔔 Notif envoyée</span>}
                <span style={{ fontSize: 11, color: COLORS.muted, marginLeft: "auto" }}>{a.date}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.heading }}>{a.title}</div>
              <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>{a.body}</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ background: "rgba(59,130,246,0.15)", border: "none", borderRadius: 8, padding: "7px 12px", color: COLORS.accent, fontSize: 11, cursor: "pointer" }}>✏️ Modifier</button>
              <button style={{ background: "rgba(239,68,68,0.15)", border: "none", borderRadius: 8, padding: "7px 12px", color: COLORS.red, fontSize: 11, cursor: "pointer" }}>🗑️ Supprimer</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: COLORS.sidebar, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 20, padding: 28, width: 480 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.heading, marginBottom: 20 }}>Nouvelle Annonce</div>
            {[["Titre de l'annonce"], ["Catégorie (Urgent / Examen / Info / Événement)"], ["Contenu de l'annonce"]].map(([p], i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 600, marginBottom: 5 }}>{p}</div>
                <div style={{ background: COLORS.bg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 8, padding: i === 2 ? "9px 12px" : "9px 12px", minHeight: i === 2 ? 80 : "auto", fontSize: 12, color: COLORS.muted }}>...</div>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: COLORS.bg, borderRadius: 10, padding: "10px 14px", marginBottom: 18 }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: COLORS.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>✓</div>
              <div style={{ fontSize: 13, color: COLORS.text }}>Envoyer une notification push aux étudiants</div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "none", borderRadius: 10, padding: 12, color: COLORS.muted, cursor: "pointer", fontSize: 13 }}>Annuler</button>
              <button style={{ flex: 1, background: COLORS.accent, border: "none", borderRadius: 10, padding: 12, color: "white", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Publier</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── STUDENTS ──────────────────────────────────────────────
const StudentsScreen = () => {
  const students = [
    { name: "IBIZZI Khalid", email: "k.ibizzi@ensiasd.ac.ma", filiere: "IL", semester: "S8", status: "Actif" },
    { name: "BENCHAOUI Hamza", email: "h.benchaoui@ensiasd.ac.ma", filiere: "IL", semester: "S8", status: "Actif" },
    { name: "BOUHALI Meriame", email: "m.bouhali@ensiasd.ac.ma", filiere: "IL", semester: "S8", status: "Actif" },
    { name: "DRIOUECH Noureddine", email: "n.driouech@ensiasd.ac.ma", filiere: "IL", semester: "S8", status: "Actif" },
    { name: "ALAOUI Sara", email: "s.alaoui@ensiasd.ac.ma", filiere: "SDBDIA", semester: "S6", status: "Actif" },
    { name: "BENALI Youssef", email: "y.benali@ensiasd.ac.ma", filiere: "SDBDIA", semester: "S6", status: "Inactif" },
  ];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.heading }}>Gestion des Étudiants</div>
          <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>318 étudiants inscrits</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {["Tous","IL","SDBDIA"].map((f, i) => (
            <div key={i} style={{ background: i===0 ? COLORS.accent : "rgba(255,255,255,0.06)", borderRadius: 8, padding: "6px 14px", fontSize: 12, color: i===0 ? "white" : COLORS.muted, cursor: "pointer" }}>{f}</div>
          ))}
        </div>
      </div>
      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 2.5fr 1fr 1fr 1fr 1fr", padding: "12px 20px", borderBottom: `1px solid ${COLORS.cardBorder}`, fontSize: 11, color: COLORS.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8 }}>
          {["Nom","Email","Filière","Semestre","Statut","Actions"].map(h => <div key={h}>{h}</div>)}
        </div>
        {students.map((s, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 2.5fr 1fr 1fr 1fr 1fr", padding: "14px 20px", borderBottom: i < students.length-1 ? `1px solid ${COLORS.cardBorder}` : "none", alignItems: "center", fontSize: 12 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: COLORS.accent + "33", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: COLORS.accent, fontWeight: 700 }}>{s.name[0]}</div>
              <div style={{ fontWeight: 600, color: COLORS.heading, fontSize: 13 }}>{s.name}</div>
            </div>
            <div style={{ color: COLORS.muted, fontSize: 11 }}>{s.email}</div>
            <div><span style={{ background: (s.filiere === "IL" ? COLORS.accent : COLORS.green) + "22", color: s.filiere === "IL" ? COLORS.accent : COLORS.green, borderRadius: 6, padding: "3px 8px", fontSize: 10, fontWeight: 700 }}>{s.filiere}</span></div>
            <div style={{ color: COLORS.muted }}>{s.semester}</div>
            <div><span style={{ background: (s.status === "Actif" ? COLORS.green : COLORS.muted) + "22", color: s.status === "Actif" ? COLORS.green : COLORS.muted, borderRadius: 6, padding: "3px 8px", fontSize: 10, fontWeight: 600 }}>{s.status}</span></div>
            <div style={{ display: "flex", gap: 6 }}>
              <button style={{ background: "rgba(59,130,246,0.15)", border: "none", borderRadius: 6, padding: "5px 8px", color: COLORS.accent, fontSize: 11, cursor: "pointer" }}>👁️</button>
              <button style={{ background: "rgba(239,68,68,0.15)", border: "none", borderRadius: 6, padding: "5px 8px", color: COLORS.red, fontSize: 11, cursor: "pointer" }}>🚫</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── NOTIFICATIONS ──────────────────────────────────────────
const NotificationsScreen = () => {
  const [sent, setSent] = useState(false);
  const logs = [
    { title: "Changement salle TD Réseaux", target: "IL – S8", recipients: 42, date: "02 Mar 2026 14:32", status: "Envoyée" },
    { title: "Rappel examen rattrapage", target: "Tous", recipients: 318, date: "28 Fév 2026 09:00", status: "Envoyée" },
    { title: "Conférence IA demain", target: "Tous", recipients: 318, date: "24 Fév 2026 17:00", status: "Envoyée" },
  ];
  return (
    <div>
      <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.heading, marginBottom: 4 }}>Notifications Push</div>
      <div style={{ fontSize: 12, color: COLORS.muted, marginBottom: 24 }}>Envoyez des alertes en temps réel via Firebase</div>

      {/* Compose */}
      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.heading, marginBottom: 18 }}>📤 Composer une notification</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 600, marginBottom: 5 }}>Titre</div>
            <div style={{ background: COLORS.bg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 8, padding: "9px 12px", fontSize: 12, color: COLORS.muted }}>Ex : Changement de salle...</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 600, marginBottom: 5 }}>Destinataires</div>
            <div style={{ background: COLORS.bg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 8, padding: "9px 12px", fontSize: 12, color: COLORS.text, display: "flex", justifyContent: "space-between" }}>Tous les étudiants <span>▼</span></div>
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 600, marginBottom: 5 }}>Message</div>
          <div style={{ background: COLORS.bg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 8, padding: "9px 12px", minHeight: 70, fontSize: 12, color: COLORS.muted }}>Rédigez votre message ici...</div>
        </div>

        {/* Target selector */}
        <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
          {["Tous (318)","IL uniquement (172)","SDBDIA uniquement (146)"].map((t, i) => (
            <div key={i} style={{ background: i===0 ? COLORS.accent + "22" : "rgba(255,255,255,0.04)", border: `1px solid ${i===0 ? COLORS.accent : COLORS.cardBorder}`, borderRadius: 8, padding: "7px 14px", fontSize: 12, color: i===0 ? COLORS.accent : COLORS.muted, cursor: "pointer" }}>{t}</div>
          ))}
        </div>

        {sent ? (
          <div style={{ background: COLORS.green + "22", border: `1px solid ${COLORS.green}44`, borderRadius: 10, padding: "12px 16px", color: COLORS.green, fontSize: 13, fontWeight: 600, textAlign: "center" }}>
            ✅ Notification envoyée à 318 étudiants avec succès !
          </div>
        ) : (
          <button onClick={() => setSent(true)} style={{ background: COLORS.accent, border: "none", borderRadius: 10, padding: "12px 28px", color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            🔔 Envoyer la notification
          </button>
        )}
      </div>

      {/* Log */}
      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16, padding: 22 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.heading, marginBottom: 16 }}>Historique des envois</div>
        {logs.map((l, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < logs.length-1 ? `1px solid ${COLORS.cardBorder}` : "none" }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: COLORS.accent + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🔔</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{l.title}</div>
              <div style={{ fontSize: 11, color: COLORS.muted }}>Envoyé à : {l.target} · {l.recipients} destinataires</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 10, color: COLORS.muted }}>{l.date}</div>
              <div style={{ background: COLORS.green + "22", color: COLORS.green, borderRadius: 6, padding: "2px 8px", fontSize: 10, fontWeight: 600, marginTop: 4 }}>{l.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const screenComponents = { dashboard: DashboardScreen, buildings: BuildingsScreen, rooms: RoomsScreen, schedules: SchedulesScreen, announcements: AnnouncementsScreen, students: StudentsScreen, notifications: NotificationsScreen };

export default function AdminApp() {
  const [active, setActive] = useState("dashboard");
  const ActiveComp = screenComponents[active as keyof typeof screenComponents];

  return (
    <div style={{ display: "flex", background: COLORS.bg, minHeight: "100vh", fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif", color: COLORS.text }}>
      {/* Sidebar */}
      <div style={{ width: 220, background: COLORS.sidebar, borderRight: `1px solid ${COLORS.cardBorder}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "24px 20px", borderBottom: `1px solid ${COLORS.cardBorder}` }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.heading, letterSpacing: -0.3 }}>Smart Campus</div>
          <div style={{ fontSize: 10, color: COLORS.accent, fontWeight: 600, marginTop: 2, textTransform: "uppercase", letterSpacing: 1 }}>Admin Panel</div>
        </div>

        <div style={{ padding: "14px 10px", flex: 1 }}>
          {navItems.map(item => (
            <div key={item.id} onClick={() => setActive(item.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, marginBottom: 2, cursor: "pointer", background: active === item.id ? COLORS.accentGlow : "transparent", color: active === item.id ? COLORS.accent : COLORS.muted, fontWeight: active === item.id ? 600 : 400, fontSize: 13, borderLeft: active === item.id ? `3px solid ${COLORS.accent}` : "3px solid transparent", transition: "all 0.15s" }}>
              <span style={{ fontSize: 15 }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        <div style={{ padding: "16px 20px", borderTop: `1px solid ${COLORS.cardBorder}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: COLORS.accent + "33", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>👩‍💼</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.text }}>Pr. Rassam</div>
              <div style={{ fontSize: 10, color: COLORS.muted }}>Administrateur</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Top bar */}
        <div style={{ background: COLORS.sidebar, borderBottom: `1px solid ${COLORS.cardBorder}`, padding: "14px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ fontSize: 13, color: COLORS.muted }}>
            <span style={{ color: COLORS.muted }}>Admin</span>
            <span style={{ margin: "0 6px" }}>›</span>
            <span style={{ color: COLORS.text, fontWeight: 600 }}>{navItems.find(n => n.id === active)?.label}</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 8, padding: "6px 14px", fontSize: 12, color: COLORS.muted }}>🔍 Rechercher...</div>
            <div style={{ position: "relative" }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>🔔</div>
              <div style={{ position: "absolute", top: -4, right: -4, width: 14, height: 14, borderRadius: "50%", background: COLORS.red, fontSize: 8, color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>3</div>
            </div>
          </div>
        </div>

        <div style={{ padding: 28 }}>
          <ActiveComp />
        </div>
      </div>
    </div>
  );
}