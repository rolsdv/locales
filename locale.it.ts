import { Locale } from './locale';

export const locale: Locale = {
  name: 'italiano',
  language: 'it',
  items: [
    // General
    { source: 'Salva', target: '' },
    { source: 'Nuovo', target: '' },
    { source: 'Duplico', target: '' },
    { source: 'Duplica', target: '' },
    { source: 'Modifica globale', target: '' },
    { source: 'Esporta', target: '' },
    { source: 'Importa', target: '' },
    { source: 'Elimina', target: '' },

    // Fields
    { source: 'opzionale', target: '' },
    { source: 'Scegli', target: '' },
    { source: 'Cancella valore', target: '' },
    { source: 'carico...', target: '' },
    { source: 'Nessun risultato', target: '' },
    { source: 'Cerca...', target: '' },
    { source: 'Inserisci almeno {0} caratteri', target: '' },

    // List components
    { source: 'Filtro', target: '' },
    { source: 'Escludi', target: '' },
    { source: 'Azioni', target: '' },
    { source: 'Cerca', target: '' },
    { source: 'Refresh automatico', target: '' },
    { source: 'Tutto', target: '' },
    { source: 'Selezionato', target: '' },
    {
      source: 'Purtroppo, nessun {0} soddisfa la ricerca',
      target: ''
    },
    { source: 'Caricamento {0}, attendi...', target: '' },
    { source: 'Aggiungi filtro', target: '' },
    { source: 'Ordine dei toggles', target: '' },
    { source: 'Caricamento fallito', target: '' },
    { source: 'Non configurato', target: '' },
    {
      source: 'Questo componente non è configurato',
      target: ''
    },
    { source: 'dati', target: '' },
    { source: '{0} elementi', target: '' },

    // Menu
    { source: 'Teams e Membri', target: '' },
    { source: 'Pagamenti', target: '' },
    { source: 'Pagamenti & Piani', target: '' },
    { source: 'API keys', target: '' },
    { source: 'Modalità Dark', target: '' },
    { source: 'Modalità Light', target: '' },
    { source: 'Disabilita Staff', target: '' },
    { source: 'Abilita Staff', target: '' },
    { source: 'Organizza Modelli', target: '' },
    { source: 'Logout', target: '' },
    { source: 'Activity Log', target: '' },
    { source: 'Collaborazioni', target: '' },
    { source: 'Apri Visual Builder', target: '' },

    // Filters
    { source: 'uguale a', target: '' },
    { source: 'contiene', target: '' },
    { source: 'inizia con', target: '' },
    { source: 'termina con', target: '' },
    { source: 'maggiore di', target: '' },
    { source: 'minore o uguale a', target: '' },
    { source: 'minore di', target: '' },
    { source: 'minore o uguale a', target: '' },
    { source: 'uno fra', target: '' },
    { source: 'è nullo', target: '' },
    { source: 'successiva', target: '' },
    { source: 'precedente', target: '' },
    { source: 'è Oggi', target: '' },
    { source: 'è Ieri', target: '' },
    { source: 'è Settimana Scorsa', target: '' },
    { source: 'è Mese Scorso', target: '' },
    { source: 'è Trimestre Scorso', target: '' },
    { source: 'è Anno Scorso', target: '' },
    { source: 'è Ultimi X Giorni', target: '' },
    { source: 'è Settimana Passata', target: '' },
    { source: 'è Mese Passato', target: '' },
    { source: 'è Trimestre Passato', target: '' },
    { source: 'è Anno Passato', target: '' },
    { source: 'è X Giorni Passati', target: '' },
    { source: 'Nessuna attività trovata', target: '' },
    {
      source: 'Inizia a lavorare con i dati per avviare il log.',
      target: ''
    },

    // Activity log
    { source: 'Log completo', target: '' },
    { source: 'Crea Dato', target: '' },
    { source: 'Aggiorna Dato', target: '' },
    { source: 'Elimina Dato', target: '' },
    { source: 'Tutti i Membri', target: '' },

    // Collaboration
    { source: 'Timeline', target: '' },
    { source: 'Messaggi', target: '' },
    { source: 'Attività', target: '' },
    { source: 'Inizia una chat con il tuo Team', target: '' },
    {
      source: 'Messaggio con informazioni importanti su questa pagina.',
      target: ''
    },
    { source: 'Messaggio', target: '' },
    { source: 'Invia', target: '' },

    // Share
    { source: 'Invita membri', target: '' },
    { source: 'Condivisione pubblica', target: '' },
    { source: 'Registrati', target: '' },
    { source: 'Membri', target: '' },
    { source: 'Invito via Email', target: '' },
    { source: 'Invita qualcuno...', target: '' },
    { source: 'Invia Invito', target: '' },
    {
      source: 'Limita accesso ai dati in base a caratteristiche utente',
      target: ''
    },
    {
      source: 'Inserisci email utente che desideri invitare.',
      target: ''
    },
    { source: 'Copia', target: '' },
    { source: 'Invito con Link', target: '' },
    { source: 'Elimina link', target: '' },
    { source: 'Aggiungi Link di invito', target: '' },
    {
      source: 'Chiunque in internet può unirsi a questo team attraverso il presente link.',
      target: ''
    },
    { source: 'Inviti in Sospeso', target: '' },
    { source: 'Annulla invito', target: '' },
    { source: 'Membri Attivi', target: '' },
    { source: 'Elimina membro', target: '' },
    {
      source: 'Stai impostando la condivisione di questa pagina',
      target: ''
    },
    {
      source: 'Stai impostando la condivisione di tutte le pagine di questa App.',
      target: ''
    },
    { source: 'Link Accesso Pubblico', target: '' },
    { source: 'Aggiorno accesso pubblico...', target: '' },
    {
      source:
        'Chiunque in internet può vedere questa pagina con questo link. Puoi usare il link come embed di questa pagina in un altro sito.',
      target:
        'Cualquier persona con este enlace podrá ver la página actual. De esta manera, también puede incrustar la página actual en otro sitio web.'
    },
    { source: 'Embed codice(IFRAME)', target: '' },
    {
      source: 'Incolla questo codice nel codice HTML del tuo sito web dove vuoi che appaia la pagina corrente.',
      target: ''
    },
    { source: 'link', target: '' },
    { source: 'invitato', target: '' },
    { source: 'Scegli Team', target: '' },
    { source: 'Team App', target: '' },
    { source: 'Team di Default', target: '' },
    { source: 'Svuota Team', target: '' },
    { source: 'Può modificare la app e i dati', target: '' },
    { source: 'Può modificare i dati ma non la app', target: '' },
    { source: 'Permesso di sola lettura senza modifiche', target: '' },
    { source: 'Aggiungi Team', target: '' },
    { source: 'Modifica Team', target: '' },
    { source: 'Aggiungo Team', target: '' },
    {
      source: 'Gestisci chi ha accesso alla App',
      target: ''
    },
    { source: 'Inserisci Nome del Team', target: '' },
    {
      source: 'Scrivi il nome del team, es: Supporto, Vendite, Marketing, ecc.',
      target: ''
    },
    { source: 'Aggiungi un membro a questo team.', target: '' },
    { source: 'Invita un nuovo membro', target: '' },
    { source: 'Membro', target: '' },
    { source: 'Data Inserimento', target: '' },
    { source: 'Tu', target: '' },
    { source: 'Modifica', target: '' },
    { source: 'Nessun membro in questo team', target: '' },
    { source: 'Permessi Pagina', target: '' },
    { source: 'Permessi App', target: '' },
    { source: 'Proprietà', target: '' },
    { source: 'Nome Pagina', target: '' },
    { source: 'Accesso', target: '' },
    { source: 'Accesso Completo', target: '' },
    { source: 'Sola Lettura', target: '' },
    { source: 'Nessun Accesso', target: '' },
    { source: 'Leggi', target: '' },
    { source: 'Aggiorna', target: '' },
    { source: 'Scrivi', target: '' },
    { source: { label: 'Elimina', context: 'permissions' }, target: '' },
    { source: 'Accesso Speciale', target: '' },
    { source: 'Leggi, inserisci, aggiorna o elimina i dati', target: '' },
    { source: 'Scegli le operazioni consentite una ad una', target: '' },
    { source: 'Senza accesso ai dati', target: '' },
    { source: 'Nome', target: '' },
    { source: 'Attivo', target: '' },
    { source: 'Impostazioni', target: '' },
    { source: 'Membri e Teams', target: '' },
    { source: 'App Builder', target: '' },
    { source: 'Permessi', target: '' },
    { source: "Estendi permessi a tutta la collezione", target: '' },
    { source: 'Collezione', target: '' },
    {
      source: 'Limita accesso in base alle proprietà del team',
      target: ''
    },
    { source: 'Annulla', target: '' },
    { source: 'Salva Team', target: '' },
    { source: 'Crea Team', target: '' },
    { source: 'Valore', target: '' },
    { source: 'Nessuna proprietà impostata', target: '' },

    // Navigation
    { source: 'App Corrente', target: '' },
    { source: 'Home', target: '' },

    // Profile
    { source: 'Caricamento', target: '' },
    {
      source: 'Stiamo caricando i dati utente...',
      target: ''
    },
    { source: 'Indietro', target: '' },
    { source: 'Impostazioni Profilo', target: '' },
    { source: 'Info di base sul tuo account.', target: '' },
    { source: 'Immagine', target: '' },
    { source: 'la tua immagine', target: '' },
    { source: 'Modifica', target: '' },
    { source: 'Carica', target: '' },
    { source: 'Nome', target: '' },
    { source: 'Cognome', target: '' },
    { source: 'Email', target: '' },
    { source: 'Cambio Password', target: '' },
    {
      source: 'Crea una password di almeno 12 caratteri per garantire la sicurezza.',
      target:
        'Una contraseña debe ser lo suficientemente fuerte para proteger su cuenta, así que hágala de al menos 12 caracteres.'
    },
    { source: 'Password Attuale', target: '' },
    { source: 'Nuova Password', target: '' },
    { source: 'Conferma Nuova Password', target: '' },
    { source: 'Modifica Password', target: '' },
    { source: 'Preferenze', target: '' },
    { source: 'Lingua', target: '' },
    {
      source: 'Imposta ulteriori preferenze account.',
      target: ''
    },
    { source: 'News & Proposals', target: '' },
    {
      source: 'Ricevi aggiornamenti e propositi di sviluppo.',
      target: ''
    },
    { source: 'Salva modifiche', target: '' },

    // My Apps
    { source: 'Scrivi per cercare...', target: '' },
    { source: 'Le Mie App', target: '' },
    { source: 'Nuova App', target: '' },
    { source: 'Builder', target: '' },
    { source: 'App', target: '' },
    { source: 'continua installazione', target: '' },
    { source: 'Apri builder', target: '' },
    { source: 'Vedi App pubblicata', target: '' },
    { source: 'Elimina App', target: '' },
    { source: 'Inizia da un modello', target: '' },
    { source: 'Anteprima', target: '' },
    { source: 'Contatta Assistenza', target: '' },
    { source: 'Documentazione', target: '' },
    { source: 'Richiedi Features', target: '' },
    { source: 'Novità', target: '' },
    { source: 'Cerca fra i modelli...', target: '' },
    { source: 'qualsiasi', target: '' },
    { source: 'avanti', target: '' },
    { source: 'Scegli Base Dati', target: '' },
    { source: 'funziona con oltre 30 tipi di database', target: '' },
    { source: 'Usa questo modello', target: '' },
    { source: 'inserisci i dati in Jet Tables', target: '' },
    { source: 'Nuovi Dati', target: '' },
    { source: 'stai usando {0}', target: '' },
    { source: "Non trovi la risorsa che stai cercando?", target: '' },
    { source: 'Pannello Admin', target: '' },
    {
      source: 'Operazioni di lettura, editing e creazione (CRUD) sulla tua base dati',
      target: ''
    },
    {
      source: 'Crea un pannello admin personalizzato con qualsiasi databases, app e APIs come Stripe, Twilio e GraphQL.',
      target:
        'Cree un panel de administración personalizado basado en cualquier base de datos, aplicaciones y API como Stripe, Twilio y GraphQL.'
    },
    { source: 'Tutte le Integrazioni', target: '' },
    { source: 'Databases', target: '' },
    { source: 'APIs', target: '' },
    { source: 'Frameworks', target: '' },
    { source: 'Archivi', target: '' },

    // Sign In
    { source: 'Attendere...', target: '' },
    { source: 'Buongiorno', target: '' },
    { source: 'Buongiorno', target: '' },
    { source: 'Buonasera', target: '' },
    { source: 'Accedi', target: '' },
    { source: 'Bentornato.', target: '' },
    { source: 'Accedi con {0}', target: '' },
    { source: 'o entra con', target: '' },
    { source: 'Inserisci E-mail', target: '' },
    { source: 'Inserisci password', target: '' },
    { source: 'Entra', target: '' },
    { source: 'Crea nuovo account', target: '' },
    { source: 'Password dimenticata', target: '' },
    { source: 'obbligatorio', target: '' },
    { source: 'Email non corretta', target: '' },
    { source: 'Lunghezza minima password {0}', target: '' },
    { source: 'Impossibile Accedere', target: '' },

    // Sign Up
    {
      source: 'Primi passi <span class="auth-form__accent">Gratis oggi</span>',
      target: ''
    },
    {
      source: "Nessuna carta richiesta. Accesso gratuito alle funzionalità PRO per i primi 14 giorni.",
      target: ''
    },
    { source: 'o', target: '' },
    { source: 'Inserisci Nome', target: '' },
    { source: 'Inserisci Cognome (optional)', target: '' },
    { source: 'Inserisci Email', target: '' },
    { source: 'Password', target: '' },
    { source: 'Ripeti Password', target: '' },
    {
      source: 'Creando un account acconsenti a',
      target: ''
    },
    { source: 'Termini di Servizio', target: '' },
    { source: 'Privacy Policy', target: '' },
    { source: 'e', target: '' },
    { source: 'Crea il tuo account gratuito', target: '' },
    { source: 'Ho già un account', target: '' },
    { source: 'Impossibile Registrarti', target: '' },

    // Restore password
    { source: 'Cambio password', target: '' },
    { source: 'Indirizzo Email', target: '' },
    { source: 'Cambio password', target: '' },
    { source: 'Torna alla pagina di Accesso', target: '' },
    {
      source:
        'Controlla la tua Email – <strong>{0}</strong>. Ti abbiamo inviato un link per la validazione della email.',
      target: ''
    },
    {
      source: 'Ci siamo quasi, inserisci la nuova password qui sotto. <br>Almeno 8 caratteri.',
      target: ''
    },
    { source: 'Cambia password & Accedi', target: '' },
    { source: 'Impossibile Inviare Codice', target: '' },
    { source: 'Cambio Password non riuscito', target: '' },

    // Users & Teams
    { source: 'Membri di {0}', target: '' },
    { source: 'Primi passi', target: '' },
    { source: 'API Membri', target: '' },
    { source: 'API Teams', target: '' },
    { source: 'Invita Membro', target: '' },
    { source: 'Aggiungi proprietà Membro', target: '' },
    { source: 'Aggiungi proprietà Team', target: '' },
    { source: 'Aggiungi', target: '' },
    { source: 'Modifica proprietà', target: '' },
    { source: 'Elimina proprietà', target: '' },
    { source: 'Membri', target: '' },
    { source: 'Teams', target: '' },
    { source: 'Cerca membri', target: '' },
    { source: 'Cerca teams', target: '' },
    { source: '{0} pagine', target: '' },
    { source: 'Nessun membro', target: '' }
  ]
};
