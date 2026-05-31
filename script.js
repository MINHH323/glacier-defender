body { margin: 0; background: #000; font-family: 'Arial', sans-serif; overflow: hidden; touch-action: manipulation; }
.game-container { width: 100vw; height: 100vh; display: flex; flex-direction: column; }

.header { padding: 10px; background: rgba(0,0,0,0.8); display: flex; flex-direction: column; align-items: center; gap: 5px; }
.hp-bar-bg { width: 200px; height: 15px; background: #333; border: 2px solid #fff; border-radius: 10px; overflow: hidden; }
.hp-fill { width: 100%; height: 100%; background: #ff4d4d; transition: 0.3s; }
.progress-container { width: 200px; height: 5px; background: #222; border-radius: 5px; }
.progress-fill { width: 0%; height: 100%; background: #00e5ff; transition: 0.3s; }

.viewport { flex: 1; position: relative; background: linear-gradient(to bottom, #1a2a6c, #b21f1f, #fdbb2d); overflow: hidden; }
.stats { color: #fff; font-weight: bold; padding: 10px; font-size: 1.2em; text-shadow: 0 0 5px #000; }

.glacier { position: absolute; bottom: 0; width: 100%; height: 60px; background: #e0f7fa; box-shadow: 0 -5px 15px rgba(255,255,255,0.5); }
.black-carbon { position: absolute; width: 45px; height: 45px; background: #000; border-radius: 50%; cursor: pointer; box-shadow: 0 0 10px #fff; }

.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.85); display: flex; justify-content: center; align-items: center; z-index: 100; text-align: center; color: #fff; }
.content-box { padding: 30px; border: 2px solid #00e5ff; border-radius: 20px; background: rgba(0,0,0,0.5); }
.neon-text { color: #00e5ff; text-shadow: 0 0 10px #00e5ff; }
input { padding: 10px; border-radius: 5px; border: none; margin: 10px 0; width: 80%; }
button { padding: 10px 25px; background: #00e5ff; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; }

.ranking-box { margin: 15px 0; background: rgba(255,255,255,0.1); padding: 10px; border-radius: 10px; font-size: 0.9em; }
.rk-item { display: flex; justify-content: space-between; margin: 3px 0; border-bottom: 1px solid #333; }
