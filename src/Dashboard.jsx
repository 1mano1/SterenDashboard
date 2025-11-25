// src/Dashboard.jsx
import React, { useState } from 'react';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Users,
  FileText,
  AlertCircle,
  BookOpen,
  File,
  Download,
  ExternalLink,
  Info,
  Lock,
  User,
  LogOut,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  // --- Estados de Autenticación ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  // --- Estados del Dashboard ---
  const [selectedView, setSelectedView] = useState('general');

  // --- Lógica de Login ---
  const handleLogin = (e) => {
    e.preventDefault();
    // Credenciales harcodeadas para demostración
    if (user === 'admin' && pass === 'steren') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Credenciales incorrectas.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser('');
    setPass('');
    setError('');
    setSelectedView('general');
  };

  // --- Datos base del dashboard (Riesgos, KPIs, etc.) ---
  const riskData = {
    inherente: 68,
    residual: 24,
    critical: [
      { id: 'R01', name: 'Robo/filtración de datos de clientes', level: 'Alto', residual: 16 },
      { id: 'R08', name: 'Compromiso del portal web por ataques', level: 'Alto', residual: 16 },
      { id: 'R14', name: 'Pérdida de datos operativos', level: 'Alto', residual: 16 }
    ]
  };

  const assetDistribution = [
    { name: 'Sistemas POS', risks: 4, color: 'bg-red-600' },
    { name: 'E-commerce y nube', risks: 3, color: 'bg-orange-500' },
    { name: 'Inventario y CEDIS', risks: 3, color: 'bg-amber-500' },
    { name: 'Personal y RR. HH.', risks: 2, color: 'bg-blue-600' }
  ];

  const treatmentProgress = {
    total: 6,
    completed: 2,
    inProgress: 3,
    pending: 1,
    percentage: 67
  };

  const policies = {
    policyA: {
      name: 'Seguridad física',
      controls: [
        { name: 'Control de acceso biométrico', percentage: 75, ref: '7.2' },
        { name: 'CCTV en funcionamiento', percentage: 90, ref: '7.4' }
      ]
    },
    policyB: {
      name: 'Uso seguro de POS',
      controls: [
        { name: 'Filtrado web activo', percentage: 85, ref: '8.23' },
        { name: 'Credenciales únicas', percentage: 70, ref: '5.15' }
      ]
    }
  };

  const kpis = [
    { name: 'Intentos de acceso no autorizado', value: 3, trend: 'down', period: 'mes' },
    { name: 'Índice de clics en phishing', value: '12%', trend: 'down', period: 'simulacro' }
  ];

  const accountability = {
    pendingApprovals: 2,
    delayedActions: [
      { owner: 'Gerente de Operaciones', action: 'PTR06 - Sensores de incendio', days: 5 },
      { owner: 'Jefe de Sistemas', action: 'PTR11 - Simulacros de phishing', days: 2 }
    ]
  };

  const compliance = {
    iso27001: 78,
    lfpdppp: 85,
    internalAudits: 3,
    findings: 8
  };

  const corporatePolicies = [
    {
      id: 1,
      name: 'Política de seguridad de la información',
      status: 'Implementada',
      compliance: 85,
      lastReview: '15/10/2025',
      scope: 'Todo el personal de Steren (empleados, proveedores, contratistas y terceros).',
      objective:
        'Proteger la confidencialidad, integridad y disponibilidad de los activos de información, garantizando la continuidad de las operaciones y la protección de datos de clientes y colaboradores.',
      procedures:
        'Controles de seguridad para bases de datos, sistemas de ventas e inventarios. Clasificación de activos por nivel de sensibilidad.',
      color: 'bg-emerald-600'
    },
    {
      id: 2,
      name: 'Política de gestión de accesos',
      status: 'Implementada',
      compliance: 75,
      lastReview: '20/09/2025',
      scope: 'Todos los sistemas, bases de datos y equipos de la red de Steren.',
      objective:
        'Asegurar que el acceso a la información y sistemas se otorgue solo a quienes lo requieran, siguiendo el principio de "mínimo privilegio".',
      procedures:
        'Autenticación multifactor para sistemas críticos. Revisión semestral de permisos. Prohibición de compartir credenciales.',
      color: 'bg-blue-600'
    },
    {
      id: 3,
      name: 'Política de protección de datos personales',
      status: 'Implementada',
      compliance: 90,
      lastReview: '01/11/2025',
      scope:
        'Información personal de clientes, proveedores y empleados recolectada en tiendas, web o cualquier medio.',
      objective:
        'Proteger los datos personales en posesión de Steren y garantizar el cumplimiento de la LFPDPPP.',
      procedures:
        'Recolección según Aviso de Privacidad. Máxima confidencialidad en el tratamiento de datos personales.',
      color: 'bg-emerald-600'
    },
    {
      id: 4,
      name: 'Política de continuidad del negocio y recuperación ante desastres',
      status: 'En revisión',
      compliance: 70,
      lastReview: '10/08/2025',
      scope:
        'Sistemas de ventas, bases de datos de inventarios y procesos clave del mapa de procesos.',
      objective:
        'Minimizar el impacto de fallos, incidentes o desastres, garantizando la rápida recuperación y mantenimiento de servicios críticos.',
      procedures:
        'Respaldos periódicos de información. Simulacros anuales de recuperación ante desastres.',
      color: 'bg-amber-500'
    },
    {
      id: 5,
      name: 'Política de uso aceptable de recursos tecnológicos',
      status: 'Implementada',
      compliance: 80,
      lastReview: '05/10/2025',
      scope: 'Todo el personal que utilice recursos de TI de Steren en cualquier ubicación.',
      objective:
        'Establecer normas para el uso correcto y responsable de equipos, redes, internet y correo electrónico.',
      procedures:
        'Prohibido descargar software no autorizado. Uso de red y correo solo para fines laborales.',
      color: 'bg-blue-600'
    },
    {
      id: 6,
      name: 'Política de capacitación y concientización en seguridad',
      status: 'En proceso',
      compliance: 60,
      lastReview: '15/09/2025',
      scope: 'Todos los empleados de Steren, incluyendo la alta dirección.',
      objective:
        'Fomentar una cultura de seguridad de la información, asegurando que el personal conozca sus responsabilidades y riesgos.',
      procedures:
        'Curso anual obligatorio de concientización. Talleres y simulacros de phishing para medir efectividad.',
      color: 'bg-amber-500'
    },
    {
      id: 7,
      name: 'Política de evaluación de proveedores y terceros',
      status: 'Implementada',
      compliance: 75,
      lastReview: '25/10/2025',
      scope:
        'Proveedores y socios que proporcionen servicios con acceso a sistemas o datos de Steren.',
      objective:
        'Asegurar que proveedores y terceros cumplan con estándares de seguridad necesarios para proteger los activos de información.',
      procedures:
        'Evaluación de controles de seguridad en la selección. Cláusulas de protección de datos en contratos.',
      color: 'bg-blue-600'
    },
    {
      id: 8,
      name: 'Política de mejora continua del SGSI',
      status: 'Implementada',
      compliance: 85,
      lastReview: '01/11/2025',
      scope: 'SGSI completo y todos los roles involucrados en su gestión.',
      objective:
        'Asegurar que el SGSI se mantenga relevante y efectivo frente a la evolución de amenazas y cambios en el negocio.',
      procedures:
        'Revisiones periódicas siguiendo el ciclo PHVA. Actualización de controles basada en auditorías y retroalimentación.',
      color: 'bg-emerald-600'
    }
  ];

  // =================================================================
  // DATOS DE DOCUMENTACIÓN
  // =================================================================

  // 1. Documentos del Sistema (Formatos Vacíos / Plantillas)
  const systemTemplates = [
    {
      code: 'STN-FMT-01',
      name: 'Formato de política del SGSI',
      version: 'v2.0',
      type: 'Word'
    },
    {
      code: 'STN-FMT-02',
      name: 'Plantilla de Matriz de contexto y gestión del riesgo',
      version: 'v3.1',
      type: 'Excel'
    },
    {
      code: 'STN-FMT-03',
      name: 'Formato de Matriz de identificación de riesgos',
      version: 'v1.0',
      type: 'Excel'
    },
    {
      code: 'STN-FMT-04',
      name: 'Plantilla Parámetros del nivel de riesgo',
      version: 'v1.2',
      type: 'Excel'
    },
    {
      code: 'STN-FMT-05',
      name: 'Plantilla de Plan de tratamiento de riesgos',
      version: 'v2.0',
      type: 'Excel'
    }
  ];

  // 2. Información Documentada (Formatos Llenos / Registros / Evidencia)
  const filledDocuments = [
    {
      code: 'STN-CONT-01',
      name: 'Contextualización de la empresa',
      file: 'https://drive.google.com/file/d/1jaPZ7A4M2dGJuBVdipgC0R2yzS5N_rDu/view',
      source: 'Contextualización de Steren.pdf'
    },
    {
      code: 'STN-MCGR-01',
      name: 'Matriz de contexto y gestión del riesgo',
      file: 'https://docs.google.com/spreadsheets/d/1IFexAmxQDLKSu6giAQy1ihMHO_4BQoce/edit?gid=813725078#gid=813725078',
      source: 'Matriz de riesgos Steren.xlsx'
    },
    {
      code: 'STN-MIR-01',
      name: 'Matriz de identificación de riesgos - What if...?',
      file: 'https://docs.google.com/spreadsheets/d/1IFexAmxQDLKSu6giAQy1ihMHO_4BQoce/edit?gid=1103293586#gid=1103293586',
      source: 'Matriz de riesgos Steren.xlsx'
    },
    {
      code: 'STN-PNR-01',
      name: 'Parámetros del nivel de riesgo',
      file: 'https://docs.google.com/spreadsheets/d/1IFexAmxQDLKSu6giAQy1ihMHO_4BQoce/edit?gid=1370731306#gid=1370731306',
      source: 'Matriz de riesgos Steren.xlsx'
    },
    {
      code: 'STN-PTR-01',
      name: 'Plan de tratamiento de riesgos',
      file: 'https://docs.google.com/spreadsheets/d/1IFexAmxQDLKSu6giAQy1ihMHO_4BQoce/edit?gid=1143109268#gid=1143109268',
      source: 'Matriz de riesgos Steren.xlsx'
    },
    {
      code: 'STN-FODA-01',
      name: 'Análisis FODA del SGSI Steren',
      file: 'https://docs.google.com/spreadsheets/d/1IFexAmxQDLKSu6giAQy1ihMHO_4BQoce/edit?gid=1874170587#gid=1874170587',
      source: 'Matriz de riesgos Steren.xlsx'
    },
    {
      code: 'STN-PC-01-08',
      name: 'Políticas corporativas del SGSI',
      file: 'https://drive.google.com/file/d/1mwB6_9cYDaJrx76m6LGoMv4Tfnr25Ira/view',
      source: 'Politicas corporativas - Steren.pdf'
    },
    {
      code: 'STN-ISO-POL-A-B',
      name: 'Políticas A y B (Seguridad física y uso seguro de POS)',
      file: '/data/ISO 27001.pdf',
      source: 'ISO 27001.pdf'
    },
    {
      code: 'STN-DASH-01',
      name: 'Documentación del Dashboard',
      file: 'https://drive.google.com/file/d/1wyajzXPKZPt6-M_6qI6gr1wI9DpyDHYD/view',
      source: 'Documentación Dashboard de Riesgos del SGSI.pdf'
    }
  ];

  // Función auxiliar para estilos de estado
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'Implementada':
      case 'Completado':
      case 'Mitigado':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
      case 'En proceso':
      case 'En mitigación':
      case 'En revisión':
        return 'bg-amber-50 text-amber-700 border border-amber-200';
      case 'Pendiente':
        return 'bg-slate-100 text-slate-600 border border-slate-300';
      default:
        return 'bg-blue-50 text-blue-700 border border-blue-200';
    }
  };

  // --- RENDERIZADO CONDICIONAL: LOGIN O DASHBOARD ---

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
          {/* Header del Login */}
          <div className="bg-blue-900 p-8 text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
               <img
                src="https://images.seeklogo.com/logo-png/37/2/steren-logo-png_seeklogo-375600.png"
                alt="Steren"
                className="h-8"
              />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-wide">Acceso al SGSI</h2>
            <p className="text-blue-200 text-sm mt-1">Sistema de Gestión de Seguridad</p>
          </div>

          {/* Formulario */}
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Usuario</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="text-slate-400" size={20} />
                  </div>
                  <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-800 bg-slate-50"
                    placeholder="Ej. admin"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Contraseña</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="text-slate-400" size={20} />
                  </div>
                  <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-800 bg-slate-50"
                    placeholder="••••••"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded flex items-center gap-2">
                  <AlertCircle className="text-red-500" size={18} />
                  <p className="text-sm text-red-700 font-medium">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Iniciar Sesión <ArrowRight size={18} />
              </button>
            </form>
          </div>
          <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
            <p className="text-xs text-slate-500">Acceso restringido solo para personal autorizado.</p>
          </div>
        </div>
      </div>
    );
  }

  // --- SI ESTÁ AUTENTICADO, MUESTRA EL DASHBOARD ---

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col font-sans">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/37/Logo_de_Steren.svg"
              alt="Logo Steren"
              className="h-12"
            />
            <div>
              <h1 className="text-3xl font-bold text-blue-900">Dashboard</h1>
              <p className="text-slate-600 font-medium">
                Sistema de Gestión de Seguridad de la Información (SGSI) de Steren
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm text-slate-500">Usuario actual: <span className="font-semibold text-slate-700">{user}</span></p>
              <p className="text-xs font-bold text-blue-700 mt-0.5">23 de nov. de 2025</p>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-white border border-slate-300 hover:bg-red-50 hover:border-red-200 hover:text-red-600 text-slate-600 p-2 rounded-lg transition-colors shadow-sm"
              title="Cerrar Sesión"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs - Estilo Steren */}
        <div className="flex gap-1 border-b border-slate-200">
          {['general', 'riesgos', 'controles', 'políticas', 'documentación'].map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`px-5 py-3 font-medium text-sm transition-all duration-200 capitalize rounded-t-md ${
                selectedView === view
                  ? 'border-b-2 border-blue-700 text-blue-800 bg-blue-50/50'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1">
        {/* Vista General */}
        {selectedView === 'general' && (
          <>
            {/* Indicadores de Riesgo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">Riesgo inherente total</h3>
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <div className="text-4xl font-extrabold text-red-700 mb-2">{riskData.inherente}</div>
                <p className="text-sm text-slate-600">Exposición bruta de Steren</p>
                <div className="mt-4 bg-red-100 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">Riesgo residual</h3>
                  <Shield className="text-orange-600" size={24} />
                </div>
                <div className="text-4xl font-extrabold text-orange-700 mb-2">{riskData.residual}</div>
                <p className="text-sm text-slate-600">Después de controles</p>
                <div className="mt-4 bg-orange-100 rounded-full h-2.5">
                  <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">Progreso del PTR</h3>
                  <TrendingUp className="text-emerald-600" size={24} />
                </div>
                <div className="text-4xl font-extrabold text-emerald-700 mb-2">
                  {treatmentProgress.percentage}%
                </div>
                <p className="text-sm text-slate-600">
                  {treatmentProgress.completed}/{treatmentProgress.total} acciones completadas
                </p>
                <div className="mt-4 bg-emerald-100 rounded-full h-2.5">
                  <div
                    className="bg-emerald-600 h-2.5 rounded-full"
                    style={{ width: `${treatmentProgress.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Riesgos Críticos y Distribución */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                  <AlertCircle className="mr-2 text-red-600" size={20} />
                  Riesgos residuales prioritarios
                </h3>
                <div className="space-y-3">
                  {riskData.critical.map((risk) => (
                    <div key={risk.id} className="border-l-4 border-red-600 pl-4 py-2 bg-red-50/50 rounded-r-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-slate-800">{risk.id}</p>
                          <p className="text-sm text-slate-700">{risk.name}</p>
                        </div>
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">
                          {risk.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 font-medium">Residual: {risk.residual}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4">
                  Distribución por tipo de activo
                </h3>
                <div className="space-y-5">
                  {assetDistribution.map((asset, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold text-slate-700">{asset.name}</span>
                        <span className="text-sm text-slate-600 font-medium">{asset.risks} riesgos</span>
                      </div>
                      <div className="bg-slate-200 rounded-full h-2.5">
                        <div
                          className={`${asset.color} h-2.5 rounded-full`}
                          style={{ width: `${(asset.risks / 4) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cumplimiento y Responsabilidad */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                  <FileText className="mr-2 text-blue-700" size={20} />
                  Cumplimiento normativo
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-slate-700">ISO/IEC 27001</span>
                      <span className="text-sm font-bold text-blue-700">
                        {compliance.iso27001}%
                      </span>
                    </div>
                    <div className="bg-slate-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-700 h-2.5 rounded-full"
                        style={{ width: `${compliance.iso27001}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-slate-700">LFPDPPP (Privacidad)</span>
                      <span className="text-sm font-bold text-emerald-700">
                        {compliance.lfpdppp}%
                      </span>
                    </div>
                    <div className="bg-slate-200 rounded-full h-2.5">
                      <div
                        className="bg-emerald-600 h-2.5 rounded-full"
                        style={{ width: `${compliance.lfpdppp}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-3xl font-extrabold text-blue-900">
                        {compliance.internalAudits}
                      </p>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Auditorías internas</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-3xl font-extrabold text-blue-900">{compliance.findings}</p>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Hallazgos totales</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                  <Users className="mr-2 text-blue-700" size={20} />
                  Responsabilidad y aprobaciones
                </h3>
                <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-amber-900 mb-1">
                      Riesgos pendientes de aprobación
                    </p>
                    <p className="text-xs text-amber-800">Requieren validación del comité</p>
                  </div>
                  <p className="text-4xl font-extrabold text-amber-600">
                    {accountability.pendingApprovals}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Acciones atrasadas</p>
                  <div className="space-y-2">
                    {accountability.delayedActions.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-red-50 border-l-4 border-red-600 p-3 rounded-r-md shadow-sm"
                      >
                        <div className="flex justify-between">
                            <div>
                                <p className="text-sm font-bold text-slate-800">{item.owner}</p>
                                <p className="text-xs text-slate-600 font-medium">{item.action}</p>
                            </div>
                            <p className="text-xs text-red-700 font-bold bg-red-100 px-2 py-1 rounded self-start">
                            + {item.days} días
                            </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Vista de Riesgos Detallada */}
        {selectedView === 'riesgos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Matriz de riesgos corporativa</h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100 text-slate-700 uppercase tracking-wider font-bold">
                    <tr>
                      <th className="p-4 text-left">ID</th>
                      <th className="p-4 text-left">Riesgo</th>
                      <th className="p-4 text-center">Prob.</th>
                      <th className="p-4 text-center">Imp.</th>
                      <th className="p-4 text-center">Inherente</th>
                      <th className="p-4 text-center">Residual</th>
                      <th className="p-4 text-left">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-blue-800">R01</td>
                      <td className="p-4 font-medium text-slate-700">Robo/filtración de datos de clientes</td>
                      <td className="p-4 text-center font-bold text-slate-600">4</td>
                      <td className="p-4 text-center font-bold text-slate-600">16</td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-md font-bold border border-red-200">64</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-md font-bold border border-orange-200">
                          16
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadgeStyle('En mitigación')}`}>
                          En mitigación
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-blue-800">R02</td>
                      <td className="p-4 font-medium text-slate-700">Caída sistema ventas POS</td>
                      <td className="p-4 text-center font-bold text-slate-600">3</td>
                      <td className="p-4 text-center font-bold text-slate-600">8</td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-md font-bold border border-orange-200">
                          24
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-md font-bold border border-amber-200">
                          8
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadgeStyle('Mitigado')}`}>
                          Mitigado
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-blue-800">R06</td>
                      <td className="p-4 font-medium text-slate-700">Incendio en tiendas/almacenes</td>
                      <td className="p-4 text-center font-bold text-slate-600">2</td>
                      <td className="p-4 text-center font-bold text-slate-600">16</td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-md font-bold border border-red-200">32</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md font-bold border border-yellow-200">8</span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadgeStyle('En proceso')}`}>
                          En proceso
                        </span>
                      </td>
                    </tr>
                     <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-blue-800">R08</td>
                      <td className="p-4 font-medium text-slate-700">Compromiso del portal web</td>
                      <td className="p-4 text-center font-bold text-slate-600">4</td>
                      <td className="p-4 text-center font-bold text-slate-600">16</td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-md font-bold border border-red-200">64</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-md font-bold border border-orange-200">
                          16
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadgeStyle('En mitigación')}`}>
                          En mitigación
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-blue-800">R11</td>
                      <td className="p-4 font-medium text-slate-700">Phishing al personal</td>
                      <td className="p-4 text-center font-bold text-slate-600">4</td>
                      <td className="p-4 text-center font-bold text-slate-600">8</td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-md font-bold border border-orange-200">32</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md font-bold border border-yellow-200">8</span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadgeStyle('En mitigación')}`}>
                          En mitigación
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                Plan de tratamiento de riesgos (PTR) - Seguimiento
              </h3>
              <div className="space-y-4">
                <div className="border-l-[6px] border-emerald-500 pl-4 py-4 bg-white rounded-r-lg shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-800 text-lg">
                        PTR01 - Cifrado y 2FA en BD clientes
                      </p>
                      <p className="text-sm text-slate-500 font-medium mt-1">Responsable: Jefe de Sistemas</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusBadgeStyle('Completado')}`}>
                      Completado
                    </span>
                  </div>
                </div>

                <div className="border-l-[6px] border-amber-500 pl-4 py-4 bg-white rounded-r-lg shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-800 text-lg">
                        PTR06 - Sensores y cámaras CEDIS
                      </p>
                      <p className="text-sm text-slate-500 font-medium mt-1">Responsable: Gerente de Operaciones</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusBadgeStyle('En proceso')}`}>
                      En proceso
                    </span>
                  </div>
                </div>

                <div className="border-l-[6px] border-amber-500 pl-4 py-4 bg-white rounded-r-lg shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-800 text-lg">
                        PTR08 - WAF y pruebas penetración
                      </p>
                      <p className="text-sm text-slate-500 font-medium mt-1">Responsable: Jefe de Sistemas</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusBadgeStyle('En proceso')}`}>
                      En proceso
                    </span>
                  </div>
                </div>
                
                 <div className="border-l-[6px] border-amber-500 pl-4 py-4 bg-white rounded-r-lg shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-800 text-lg">
                        PTR11 - Capacitación y simulacros phishing
                      </p>
                      <p className="text-sm text-slate-500 font-medium mt-1">Responsable: Jefe de Sistemas</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusBadgeStyle('En proceso')}`}>
                      En proceso
                    </span>
                  </div>
                </div>

                <div className="border-l-[6px] border-emerald-500 pl-4 py-4 bg-white rounded-r-lg shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-800 text-lg">
                        PTR14 - Respaldos 3-2-1 automatizados
                      </p>
                      <p className="text-sm text-slate-500 font-medium mt-1">Responsable: Jefe de Sistemas</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusBadgeStyle('Completado')}`}>
                      Completado
                    </span>
                  </div>
                </div>

                <div className="border-l-[6px] border-slate-400 pl-4 py-4 bg-white rounded-r-lg shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-800 text-lg">
                        PTR20 - Cursos obligatorios de seguridad
                      </p>
                      <p className="text-sm text-slate-500 font-medium mt-1">Responsable: Gerente de RRHH</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusBadgeStyle('Pendiente')}`}>
                      Pendiente
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vista de Controles */}
        {selectedView === 'controles' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <Shield size={20} className="text-blue-600"/> Política A: Seguridad física
              </h3>
              <div className="space-y-5">
                {policies.policyA.controls.map((control, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-slate-700">
                        {control.name}{' '}
                        <span className="text-xs text-slate-500 font-normal ml-1">(Ref. {control.ref})</span>
                      </span>
                      <span className="text-sm font-bold text-blue-700">
                        {control.percentage}%
                      </span>
                    </div>
                    <div className="bg-slate-100 rounded-full h-3 border border-slate-200">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${control.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                 <Shield size={20} className="text-emerald-600"/> Política B: Uso seguro de POS
              </h3>
              <div className="space-y-5">
                {policies.policyB.controls.map((control, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-slate-700">
                        {control.name}{' '}
                        <span className="text-xs text-slate-500 font-normal ml-1">(Ref. {control.ref})</span>
                      </span>
                      <span className="text-sm font-bold text-emerald-700">
                        {control.percentage}%
                      </span>
                    </div>
                    <div className="bg-slate-100 rounded-full h-3 border border-slate-200">
                      <div
                        className="bg-emerald-600 h-3 rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${control.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                KPIs de eficacia de controles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {kpis.map((kpi, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                    <p className="text-sm font-bold text-slate-600 mb-3 uppercase tracking-wider">{kpi.name}</p>
                    <div className="flex items-end justify-between">
                      <span className="text-4xl font-extrabold text-blue-900">{kpi.value}</span>
                      <div className="flex items-center text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                        <TrendingUp size={18} className="transform rotate-180 mr-1" />
                        <span className="text-xs font-bold">Mejorando</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 font-medium">Período: Último {kpi.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-xl flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                 <CheckCircle className="text-blue-700" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg mb-2">Estado general de controles</h4>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    El <span className="font-bold">78%</span> de los controles ISO 27001 están implementados satisfactoriamente. 
                    Se recomienda priorizar la implementación de controles relacionados con la <span className="font-semibold underline decoration-blue-300">gestión de incidentes</span> y la
                    <span className="font-semibold underline decoration-blue-300"> capacitación del personal</span> para el próximo trimestre.
                  </p>
                </div>
            </div>
          </div>
        )}

        {/* Vista de Políticas Corporativas */}
        {selectedView === 'políticas' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-blue-900">
                    Políticas corporativas del SGSI
                    </h3>
                    <p className="text-slate-600 mt-1">Marco normativo de seguridad de la información de Steren.</p>
                </div>
                <div className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg font-bold border border-blue-100">
                  Total: 8 políticas
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {corporatePolicies.map((policy) => (
                  <div
                    key={policy.id}
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-2 h-8 ${policy.color} rounded-full flex-shrink-0`}
                          ></div>
                          <h4 className="font-bold text-slate-800 text-xl group-hover:text-blue-800 transition-colors">{policy.name}</h4>
                        </div>
                        
                        <div className="ml-5 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <p className="text-xs font-bold text-blue-700 uppercase mb-1">Objetivo</p>
                                <p className="text-sm text-slate-700 leading-snug">{policy.objective}</p>
                            </div>
                             <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <p className="text-xs font-bold text-emerald-700 uppercase mb-1">Alcance</p>
                                <p className="text-sm text-slate-700 leading-snug">{policy.scope}</p>
                            </div>
                             <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <p className="text-xs font-bold text-indigo-700 uppercase mb-1">Procedimientos clave</p>
                                <p className="text-sm text-slate-700 leading-snug">{policy.procedures}</p>
                            </div>
                        </div>

                      </div>
                      <div className="flex flex-col items-end gap-3 ml-6">
                        <span
                          className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap uppercase tracking-wider border ${getStatusBadgeStyle(policy.status)}`}
                        >
                          {policy.status}
                        </span>
                        <span className="text-xs font-medium text-slate-500 whitespace-nowrap flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                         <CheckCircle size={14}/> Rev: {policy.lastReview}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-slate-700">
                          Nivel de adherencia y cumplimiento
                        </span>
                        <span className="text-lg font-extrabold text-blue-900">
                          {policy.compliance}%
                        </span>
                      </div>
                      <div className="bg-slate-100 rounded-full h-3 border border-slate-200 overflow-hidden">
                        <div
                          className={`${policy.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${policy.compliance}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumen y Acciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col justify-center">
                <h4 className="text-lg font-bold text-slate-800 mb-6">
                  Resumen de cumplimiento
                </h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-emerald-600" size={24} />
                      <span className="text-sm font-bold text-emerald-900">Implementadas</span>
                    </div>
                    <span className="text-lg font-extrabold text-emerald-700">
                      6 <span className="text-sm font-medium text-emerald-600">políticas</span> (82%)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="text-amber-600" size={24} />
                      <span className="text-sm font-bold text-amber-900">En proceso/revisión</span>
                    </div>
                    <span className="text-lg font-extrabold text-amber-700">
                      2 <span className="text-sm font-medium text-amber-600">políticas</span> (65%)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <AlertTriangle size={20} className="text-amber-600"/>
                    Acciones requeridas inmediatas
                </h4>
                <div className="space-y-4">
                  <div className="bg-white border-l-[6px] border-amber-500 p-4 rounded-r-lg shadow-sm border-t border-b border-r border-slate-100">
                    <p className="text-base font-bold text-slate-800">Política de capacitación</p>
                    <p className="text-sm text-slate-600 mt-1 font-medium">
                      Actualizar el programa anual y definir fechas para simulacros Q4.
                    </p>
                  </div>
                  <div className="bg-white border-l-[6px] border-blue-600 p-4 rounded-r-lg shadow-sm border-t border-b border-r border-slate-100">
                    <p className="text-base font-bold text-slate-800">Política de continuidad (BCP)</p>
                    <p className="text-sm text-slate-600 mt-1 font-medium">
                      Agendar sesión de revisión del plan de recuperación con dueños de procesos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner PHVA */}
            <div className="bg-slate-800 rounded-xl p-8 text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
                  <Shield size={150} />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="bg-blue-600/30 p-4 rounded-full">
                    <FileText className="text-blue-300" size={40} />
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-2xl mb-3 tracking-tight">
                    Ciclo de mejora continua (PHVA)
                  </h4>
                  <p className="text-blue-100 mb-6 text-lg leading-relaxed max-w-2xl">
                    El SGSI de Steren opera bajo un ciclo iterativo de mejora. Todas las políticas están alineadas para garantizar la evolución constante de nuestra postura de seguridad.
                  </p>
                  
                  {/* Métricas PHVA */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600 backdrop-blur-sm">
                      <p className="text-xs font-bold text-blue-300 mb-2 tracking-wider">PLANIFICAR (Plan)</p>
                      <CheckCircle className="text-emerald-400 mx-auto mb-1" size={28}/>
                      <p className="text-sm font-medium text-emerald-300">Completado</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600 backdrop-blur-sm">
                      <p className="text-xs font-bold text-blue-300 mb-2 tracking-wider">HACER (Do)</p>
                      <p className="text-3xl font-extrabold text-white">82%</p>
                      <p className="text-sm font-medium text-blue-200">Implementación</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600 backdrop-blur-sm">
                      <p className="text-xs font-bold text-blue-300 mb-2 tracking-wider">VERIFICAR (Check)</p>
                      <p className="text-3xl font-extrabold text-amber-400">3</p>
                      <p className="text-sm font-medium text-amber-200">Auditorías activas</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600 backdrop-blur-sm relative overflow-hidden">
                       <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 w-2/3 animate-pulse"></div>
                      <p className="text-xs font-bold text-blue-300 mb-2 tracking-wider">ACTUAR (Act)</p>
                      <TrendingUp className="text-indigo-400 mx-auto mb-1" size={28}/>
                      <p className="text-sm font-medium text-indigo-300">En curso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vista de Documentación / Referencias */}
        {selectedView === 'documentación' && (
          <div className="space-y-8">
            {/* SECCIÓN 1: DOCUMENTOS DEL SISTEMA (Formatos Vacíos) */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-slate-400">
              <div className="flex items-center mb-6 gap-3">
                <div className="bg-slate-100 p-2 rounded-lg">
                    <File className="text-slate-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Documentos del sistema</h3>
                  <p className="text-sm text-slate-500 font-medium">
                    Formatos oficiales vacíos disponibles para su descarga y uso.
                  </p>
                </div>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100 text-slate-700 uppercase tracking-wider font-bold">
                    <tr>
                      <th className="p-4 text-left">Código</th>
                      <th className="p-4 text-left">Nombre del formato</th>
                      <th className="p-4 text-center">Tipo</th>
                      <th className="p-4 text-center">Versión</th>
                      <th className="p-4 text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {systemTemplates.map((doc) => (
                      <tr key={doc.code} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-700">{doc.code}</td>
                        <td className="p-4 font-medium text-slate-800">{doc.name}</td>
                        <td className="p-4 text-center">
                          <span className={`px-3 py-1 rounded-md text-xs font-bold border ${
                            doc.type === 'Word' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            doc.type === 'Excel' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                            'bg-red-50 text-red-700 border-red-200'
                          }`}>
                            {doc.type}
                          </span>
                        </td>
                        <td className="p-4 text-center font-medium text-slate-500">{doc.version}</td>
                        <td className="p-4 text-center">
                          <button className="text-slate-600 hover:text-blue-700 inline-flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-100 transition-all font-bold text-xs uppercase tracking-wider">
                            <Download size={16} />
                            Descargar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECCIÓN 2: INFORMACIÓN DOCUMENTADA (Evidencia Real) */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-blue-700">
              <div className="flex items-center mb-6 gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                 <BookOpen className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    Información documentada
                  </h3>
                  <p className="text-sm text-blue-700/70 font-medium">
                    Evidencia oficial y documentos diligenciados del SGSI Steren.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-lg border border-blue-200">
                <table className="w-full text-sm">
                  <thead className="bg-blue-50 text-blue-800 uppercase tracking-wider font-bold">
                    <tr>
                      <th className="p-4 text-left">Código</th>
                      <th className="p-4 text-left">Nombre del documento</th>
                      <th className="p-4 text-left">Fuente / Archivo</th>
                      <th className="p-4 text-center">Evidencia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    {filledDocuments.map((doc) => (
                      <tr key={doc.code} className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-4 font-bold text-blue-800">{doc.code}</td>
                        <td className="p-4 font-bold text-slate-800">{doc.name}</td>
                        <td className="p-4 text-xs font-medium text-slate-500 flex items-center gap-1">
                            <FileText size={14} className="text-slate-400"/>
                            {doc.source}
                        </td>
                        <td className="p-4 text-center">
                          <a
                            href={doc.file}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center px-4 py-2 text-xs font-bold rounded-md bg-blue-700 text-white hover:bg-blue-800 transition-all shadow-sm hover:shadow-md uppercase tracking-wider"
                          >
                            <ExternalLink size={14} className="mr-2" />
                            Ver documento
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Guía de Referencia */}
            <div className="bg-slate-100 rounded-xl p-6 border border-slate-200 flex items-start gap-4">
                <div className="bg-white p-2 rounded-full shadow-sm">
                 <Info className="text-blue-700" size={24} />
                </div>
              <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                  Guía rápida: Criterios de estado del PTR
                </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-slate-400 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span> Pendiente
                  </h4>
                  <ul className="text-xs text-slate-600 font-medium space-y-1.5 list-disc list-inside marker:text-slate-400">
                    <li>Aprobado en matriz, sin inicio de acciones.</li>
                    <li>Sin tickets, órdenes o registros de avance.</li>
                    <li>Sin evidencia en repositorio.</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500 shadow-sm">
                  <h4 className="text-sm font-bold text-amber-800 mb-2 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> En proceso
                  </h4>
                  <ul className="text-xs text-amber-900 font-medium space-y-1.5 list-disc list-inside marker:text-amber-500">
                    <li>Actividad registrada con responsable y fecha.</li>
                    <li>Evidencia parcial (fotos, minutas, correos).</li>
                    <li>Avance actualizado en el registro PTR.</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-600 shadow-sm">
                  <h4 className="text-sm font-bold text-emerald-800 mb-2 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Completado
                  </h4>
                  <ul className="text-xs text-emerald-900 font-medium space-y-1.5 list-disc list-inside marker:text-emerald-600">
                    <li>Todas las actividades ejecutadas.</li>
                    <li>
                      Evidencia formal de cierre (acta, reporte final).
                    </li>
                    <li>Validado por comité o dueño del riesgo.</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-10 pt-6 border-t border-slate-200 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
        <p>Sistema de Gestión de Seguridad de la Información (SGSI) · Steren México</p>
        <p className="mt-1">Tablero de Cumplimiento y Riesgos · Desarrollado por <span className="font-bold text-blue-700">XoloDevs</span> · v1.2.6 (Build 2025.11.23)</p>
      </footer>
    </div>
  );
};

export default Dashboard;